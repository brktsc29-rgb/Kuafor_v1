import { useRef, useEffect } from 'react'

interface IntroScreenProps {
  onEnter: () => void
  exiting: boolean
}

export default function IntroScreen({ onEnter, exiting }: IntroScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.loop = false

    const FADE_DURATION = 0.5
    const MAX_OPACITY = 0.18

    const updateOpacity = () => {
      if (!video) return
      const t = video.currentTime
      const dur = video.duration

      if (!dur || isNaN(dur)) {
        animFrameRef.current = requestAnimationFrame(updateOpacity)
        return
      }

      let opacity = 1
      if (t < FADE_DURATION) opacity = t / FADE_DURATION
      else if (t > dur - FADE_DURATION) opacity = (dur - t) / FADE_DURATION

      video.style.opacity = String(Math.max(0, Math.min(MAX_OPACITY, opacity * MAX_OPACITY)))
      animFrameRef.current = requestAnimationFrame(updateOpacity)
    }

    const handleEnded = () => {
      video.currentTime = 0
      video.play().catch(() => {})
    }

    video.play().catch(() => {})
    animFrameRef.current = requestAnimationFrame(updateOpacity)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${exiting ? 'intro-out' : ''}`}
      style={{
        background: 'linear-gradient(155deg, #FFF8F5 0%, #FAE3D8 25%, #F2CEBA 50%, #F9E0D4 75%, #FFF8F5 100%)',
      }}
    >
      {/* Large champagne glow — top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '-20%',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,195,0.65) 0%, transparent 65%)',
          filter: 'blur(64px)',
        }}
      />
      {/* Rose-gold glow — bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          right: '-15%',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,129,111,0.28) 0%, transparent 65%)',
          filter: 'blur(72px)',
        }}
      />
      {/* Blush glow — center-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '25%',
          right: '5%',
          width: '45%',
          height: '45%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,225,210,0.55) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Soft hair-strand light lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B9816F" stopOpacity="0" />
            <stop offset="35%" stopColor="#B9816F" stopOpacity="0.25" />
            <stop offset="65%" stopColor="#D4A090" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#D4A090" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C89080" stopOpacity="0" />
            <stop offset="40%" stopColor="#C89080" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#B9816F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B9816F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="none" strokeLinecap="round">
          <path stroke="url(#hg1)" strokeWidth="1.2" d="M-80,180 C200,40 420,340 680,160 S980,380 1280,200 S1460,80 1560,220" />
          <path stroke="url(#hg2)" strokeWidth="0.8" d="M-60,310 C180,180 380,460 640,290 S920,510 1200,330 S1420,210 1540,360" />
          <path stroke="url(#hg1)" strokeWidth="1.0" d="M0,480 C220,340 440,580 700,420 S1000,640 1260,480 S1440,360 1540,480" />
          <path stroke="url(#hg2)" strokeWidth="0.7" d="M-100,620 C160,500 360,720 620,560 S920,780 1200,610 S1420,500 1540,620" />
          <path stroke="url(#hg1)" strokeWidth="0.9" d="M60,80 C280,-40 500,220 760,60 S1060,280 1320,100 S1480,-10 1580,100" />
          <path stroke="url(#hg2)" strokeWidth="0.6" d="M-40,760 C200,640 420,840 680,720 S960,900 1240,760 S1440,660 1540,760" />
        </g>
      </svg>

      {/* Background video — very subtle texture only */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        playsInline
        muted
        className="absolute w-full object-cover pointer-events-none"
        style={{ top: '300px', opacity: 0 }}
      />

      {/* Strong blush-ivory overlay — fully masks video landscape */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #FFF8F5 0%, rgba(250,235,225,0.94) 30%, rgba(250,232,220,0.94) 70%, #FFF8F5 100%)',
        }}
      />

      {/* Floating soft orbs */}
      <div
        className="float-rose-1 absolute top-10 left-8 w-16 h-16 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.22) 0%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        className="float-rose-2 absolute bottom-12 right-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.16) 0%, transparent 70%)',
          filter: 'blur(14px)',
        }}
      />
      <div
        className="float-rose-1 absolute top-1/3 right-6 w-10 h-10 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,144,0.24) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="float-rose-2 absolute bottom-1/3 left-5 w-14 h-14 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.14) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />

      {/* Glass card */}
      <div
        className="relative z-10 fade-rise text-center max-w-[88vw] sm:max-w-sm w-full mx-4 px-7 py-9 hover:scale-[1.02] transition-all duration-500 cursor-default"
        style={{
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          background: 'rgba(255,255,255,0.54)',
          border: '1px solid rgba(255,255,255,0.68)',
          borderRadius: '32px',
          boxShadow:
            '0 24px 80px rgba(170,110,90,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      >
        {/* Label */}
        <p
          className="text-[9px] uppercase mb-4"
          style={{ fontFamily: 'Inter, sans-serif', color: '#A87563', letterSpacing: '0.24em' }}
        >
          İSTANBUL · PREMİUM GÜZELLİK
        </p>

        {/* Logo */}
        <h1
          className="tracking-tight mb-1"
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#1F1A17',
            fontSize: 'clamp(2.2rem, 8vw, 2.8rem)',
            lineHeight: 1,
          }}
        >
          HÜLYA
        </h1>

        {/* Subtitle */}
        <p
          className="text-[11px] mb-4"
          style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63', letterSpacing: '0.12em' }}
        >
          Hair &amp; Beauty Studio
        </p>

        {/* Gradient divider */}
        <div
          className="mx-auto mb-4"
          style={{
            height: '1px',
            width: '44px',
            background: 'linear-gradient(90deg, transparent, #B9816F, transparent)',
          }}
        />

        {/* Headline */}
        <h2
          className="mb-2 leading-[1.05]"
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#1F1A17',
            fontSize: 'clamp(1.45rem, 5vw, 1.85rem)',
          }}
        >
          Saçınızın En{' '}
          <em style={{ fontStyle: 'italic', color: '#B9816F' }}>Zarif Hali</em>
        </h2>

        {/* Short description */}
        <p
          className="text-[11px] mb-6 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
        >
          Profesyonel bakım · Premium deneyim
        </p>

        {/* Button */}
        <button
          onClick={onEnter}
          className="rounded-full px-7 py-2.5 text-[11px] font-medium transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #B9816F',
            color: '#B9816F',
            background: 'transparent',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#B9816F'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#B9816F'
          }}
        >
          Salonu Keşfet
        </button>
      </div>
    </div>
  )
}
