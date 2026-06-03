import { useMemo } from 'react'
import type { PlaybackState, CinematicFilter, StoryboardCue } from '../../types'
import ParticleCanvas from './ParticleCanvas'

// CSS filter per cinematic mode
const FILTER_CSS: Record<CinematicFilter, string> = {
  'natural':           'none',
  'champagne-bloom':   'brightness(1.09) sepia(0.22) hue-rotate(-5deg) saturate(1.07)',
  'blush-romance':     'brightness(1.07) hue-rotate(11deg) saturate(1.16)',
  'classic-editorial': 'contrast(1.19) saturate(0.70) brightness(0.95)',
  'golden-hour':       'brightness(1.11) sepia(0.30) hue-rotate(-18deg) saturate(1.20)',
}

// Additive colour tint overlay
const TINT: Record<CinematicFilter, string> = {
  'natural':           'transparent',
  'champagne-bloom':   'rgba(255,238,155,0.10)',
  'blush-romance':     'rgba(255,168,190,0.13)',
  'classic-editorial': 'rgba(8,6,18,0.06)',
  'golden-hour':       'rgba(255,148,44,0.13)',
}

const IMAGES = [
  // Opening — salon interior, warm diffused light
  {
    src: 'https://images.unsplash.com/photo-1560066984-138daaa6e4b6?auto=format&fit=crop&w=720&h=1280&q=94&crop=center',
    kb:  'cp-kb-1',
  },
  // Model Touch — beauty face / hands
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=720&h=1280&q=94',
    kb:  'cp-kb-2',
  },
  // Macro Strands — hair detail
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=720&h=1280&q=94',
    kb:  'cp-kb-3',
  },
]

// Cinematic timecode string (hh:mm:ss:ff at 24fps)
function timecode(t: number): string {
  const h  = Math.floor(t / 3600)
  const m  = Math.floor((t % 3600) / 60)
  const s  = Math.floor(t % 60)
  const ff = Math.floor((t % 1) * 24)
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':') + ':' + String(ff).padStart(2, '0')
}

export default function CinematicFrame({
  playback,
  cues,
  onSparkle,
}: {
  playback: PlaybackState
  cues: StoryboardCue[]
  onSparkle: () => void
}) {
  const activeCue = useMemo(() => {
    let a = cues[0]
    for (const c of cues) if (playback.currentTime >= c.time) a = c
    return a
  }, [cues, playback.currentTime])

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        aspectRatio: '9 / 16',
        borderRadius: 28,
        boxShadow: '0 60px 130px rgba(0,0,0,0.72), 0 0 0 1px rgba(255,255,255,0.055)',
      }}
    >
      {/* ── Image layers ── */}
      {IMAGES.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover ${img.kb}`}
          style={{
            filter:     FILTER_CSS[playback.activeFilter],
            opacity:    activeCue.imageIndex === i ? 1 : 0,
            transition: 'opacity 1.35s cubic-bezier(0.42,0,0.58,1)',
          }}
        />
      ))}

      {/* ── Tint overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-700 z-[1]"
        style={{ background: TINT[playback.activeFilter] }}
      />

      {/* ── Vignettes ── */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        background: 'linear-gradient(0deg, rgba(10,6,4,0.85) 0%, rgba(10,6,4,0.28) 20%, transparent 45%)',
      }} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        background: 'linear-gradient(180deg, rgba(10,6,4,0.42) 0%, transparent 22%)',
      }} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.28) 100%)',
      }} />

      {/* ── Particle canvas (z-10, clickable) ── */}
      <ParticleCanvas onSparkle={onSparkle} isPlaying={playback.isPlaying} />

      {/* ── Cue info (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 pointer-events-none select-none">
        <p className="mb-1 text-[0.53rem] tracking-[0.32em] uppercase" style={{ fontFamily: 'Inter, sans-serif', color: '#C9A87C' }}>
          {activeCue.title}
        </p>
        <p className="text-[0.65rem] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,235,0.50)', maxWidth: '26ch' }}>
          {activeCue.description}
        </p>
      </div>

      {/* ── Timecode (top-right) ── */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none select-none">
        <span className="font-mono text-[0.50rem] tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
          {timecode(playback.currentTime)}
        </span>
      </div>

      {/* ── Top-left "REC" dot when playing ── */}
      {playback.isPlaying && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none select-none">
          <div className="w-2 h-2 rounded-full cp-rec-blink" style={{ background: '#C9A87C' }} />
          <span className="text-[0.46rem] tracking-[0.28em] uppercase font-mono" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Preview
          </span>
        </div>
      )}

      {/* ── Paused overlay ── */}
      {!playback.isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-30" style={{ background: 'rgba(0,0,0,0.22)', backdropFilter: 'blur(1.5px)' }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.10)',
              border: '1.5px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.88)" style={{ transform: 'translateX(1px)' }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* ── Speed label when slow-mo ── */}
      {playback.speed < 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
          <span
            className="rounded-full px-2 py-0.5 text-[0.50rem] tracking-[0.2em] uppercase font-mono"
            style={{ background: 'rgba(201,168,124,0.15)', border: '1px solid rgba(201,168,124,0.35)', color: '#C9A87C' }}
          >
            {playback.speed}×
          </span>
        </div>
      )}
    </div>
  )
}
