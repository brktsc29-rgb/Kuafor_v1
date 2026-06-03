import { useRef, useEffect } from 'react'

interface IntroScreenProps {
  onEnter: () => void
  exiting: boolean
}

const NAV_LINKS = [
  { label: 'Ana Sayfa',  primary: true  },
  { label: 'Hizmetler', primary: false },
  { label: 'Hakkımızda',primary: false },
  { label: 'Galeri',    primary: false },
  { label: 'İletişim',  primary: false },
]

export default function IntroScreen({ onEnter, exiting }: IntroScreenProps) {
  const videoRef      = useRef<HTMLVideoElement>(null)
  const animFrameRef  = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.loop  = false

    const FADE = 0.5

    const tick = () => {
      const t   = video.currentTime
      const dur = video.duration

      if (!dur || isNaN(dur)) {
        animFrameRef.current = requestAnimationFrame(tick)
        return
      }

      let opacity = 1
      if (t < FADE)            opacity = t / FADE
      else if (t > dur - FADE) opacity = (dur - t) / FADE

      video.style.opacity = String(Math.max(0, Math.min(1, opacity)))
      animFrameRef.current = requestAnimationFrame(tick)
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.play().catch(() => {})
    animFrameRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', onEnded)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${exiting ? 'intro-out' : ''}`}
      style={{ background: '#FFFFFF' }}
    >
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        playsInline
        muted
        className="absolute w-full object-cover pointer-events-none"
        style={{ top: 300, left: 0, right: 0, bottom: 0, opacity: 0 }}
      />

      {/* ── Gradient veil ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #FFFFFF 0%, transparent 28%, transparent 68%, #FFFFFF 100%)',
        }}
      />

      {/* ── Navigation ── */}
      <nav className="relative z-10 px-6 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <span
              className="text-3xl tracking-tight"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#000000' }}
            >
              HÜLYA
            </span>
            <span
              className="text-[10px] tracking-widest uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Hair &amp; Beauty Studio
            </span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={onEnter}
                  className="text-sm transition-colors duration-200 hover:text-black bg-transparent border-0 cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: l.primary ? '#000000' : '#6F6F6F',
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={onEnter}
            className="rounded-full px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ fontFamily: 'Inter, sans-serif', background: '#000000' }}
          >
            Salonu Keşfet
          </button>
        </div>
      </nav>

      {/* ── Hero copy ── */}
      <section
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-16 sm:pb-28 md:pb-40"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        {/* Headline */}
        <h1
          className="fade-rise font-normal max-w-6xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl"
          style={{
            fontFamily: 'Instrument Serif, serif',
            lineHeight: 1.0,
            letterSpacing: 'clamp(-0.5px, -0.17vw, -2.46px)',
            color: '#000000',
          }}
        >
          Saçınızın en güzel,{' '}
          <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>
            en zarif hali
          </em>{' '}
          için.
        </h1>

        {/* Description */}
        <p
          className="fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
        >
          Modern saç tasarımı, profesyonel renklendirme ve özel gün stilleriniz
          için. Tokat&apos;un kalbinde güzelliğinize değer katıyoruz.
        </p>

        {/* CTA button */}
        <button
          onClick={onEnter}
          className="fade-rise-delay-2 rounded-full text-base mt-12 text-white transition-all duration-300 hover:scale-[1.03]"
          style={{
            fontFamily: 'Inter, sans-serif',
            background: '#000000',
            padding: '1.25rem 3.5rem',
          }}
        >
          Salonu Keşfet
        </button>
      </section>
    </div>
  )
}
