import { useRef, useCallback, useEffect } from 'react'

// Amaj7 voiced across two octaves — warm, intimate, not too dense
const CHORD_FREQS = [110, 138.59, 164.81, 207.65, 220, 329.63]
const DETUNES     = [-6, 0, 6]
const SPARKLE_FREQS = [2637, 3136, 3520, 4186, 5274, 6272]

export function useAudioSynth() {
  const ctxRef    = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const lpfRef    = useRef<BiquadFilterNode | null>(null)
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const builtRef  = useRef(false)

  const build = useCallback(() => {
    if (builtRef.current) return
    builtRef.current = true

    const ctx    = new AudioContext()
    ctxRef.current = ctx

    // ── Master gain ───────────────────────────────────────────
    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)
    masterRef.current = master

    // ── Low-pass filter (timbre shaping) ─────────────────────
    const lpf = ctx.createBiquadFilter()
    lpf.type      = 'lowpass'
    lpf.frequency.value = 500
    lpf.Q.value   = 0.9
    lpfRef.current = lpf
    lpf.connect(master)

    // ── Simple comb-delay reverb ──────────────────────────────
    const delay  = ctx.createDelay(0.6)
    delay.delayTime.value = 0.34
    const fbGain = ctx.createGain()
    fbGain.gain.value = 0.44
    delay.connect(fbGain)
    fbGain.connect(delay)        // feedback loop
    fbGain.connect(master)       // reverb tail → master

    // ── Ambient pad oscillators ───────────────────────────────
    CHORD_FREQS.forEach((freq, ni) => {
      DETUNES.forEach(detune => {
        const osc  = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type          = 'triangle'
        osc.frequency.value = freq
        osc.detune.value  = detune
        // Higher harmonics quieter
        gain.gain.value   = (0.048 / Math.sqrt(ni + 1)) / DETUNES.length
        osc.connect(gain)
        gain.connect(lpf)
        gain.connect(delay)
        osc.start()
      })
    })

    // ── Wind/swoosh: LFO on filter cutoff ────────────────────
    const sweep = () => {
      if (!ctxRef.current || ctxRef.current.state === 'closed') return
      const t    = ctxRef.current.currentTime
      // 0.22 Hz oscillation — roughly a 4.5 s sweep cycle
      const freq = 280 + 1100 * ((Math.sin(t * 0.22 * Math.PI * 2) + 1) / 2)
      lpf.frequency.setTargetAtTime(freq, t, 0.28)
      timerRef.current = setTimeout(sweep, 80)
    }
    sweep()
  }, [])

  const start = useCallback(() => {
    build()
    const ctx = ctxRef.current!
    if (ctx.state === 'suspended') ctx.resume()
    const master = masterRef.current!
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.62, ctx.currentTime + 2.2)
  }, [build])

  const stop = useCallback(() => {
    if (!masterRef.current || !ctxRef.current) return
    const ctx = ctxRef.current
    const master = masterRef.current
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.85)
  }, [])

  // High-pitch arpeggio sparkle on canvas click
  const sparkle = useCallback(() => {
    build()
    const ctx = ctxRef.current!
    if (ctx.state === 'suspended') ctx.resume()

    SPARKLE_FREQS.forEach((baseFreq, i) => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type          = i % 2 === 0 ? 'sine' : 'triangle'
      osc.frequency.value = baseFreq + (Math.random() - 0.5) * 280

      const t0 = ctx.currentTime + i * 0.018
      gain.gain.setValueAtTime(0, t0)
      gain.gain.linearRampToValueAtTime(0.10, t0 + 0.008)
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.20 + i * 0.055)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t0)
      osc.stop(t0 + 0.28 + i * 0.06)
    })
  }, [build])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      ctxRef.current?.close()
    }
  }, [])

  return { start, stop, sparkle }
}
