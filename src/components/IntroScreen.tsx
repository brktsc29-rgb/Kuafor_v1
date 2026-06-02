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

    const updateOpacity = () => {
      if (!video) return
      const t = video.currentTime
      const dur = video.duration

      if (!dur || isNaN(dur)) {
        animFrameRef.current = requestAnimationFrame(updateOpacity)
        return
      }

      let opacity = 1

      if (t < FADE_DURATION) {
        opacity = t / FADE_DURATION
      } else if (t > dur - FADE_DURATION) {
        opacity = (dur - t) / FADE_DURATION
      }

      video.style.opacity = String(Math.max(0, Math.min(1, opacity)))
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
        background: 'linear-gradient(135deg, #FFF8F5 0%, #F5E6DC 40%, #EDD4C4 70%, #E8C8B8 100%)',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        playsInline
        muted
        className="absolute w-full object-cover pointer-events-none"
        style={{ top: '300px', opacity: 0 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90 pointer-events-none" />

      {/* Floating decorative shapes */}
      <div
        className="float-rose-1 absolute top-12 left-8 w-16 h-16 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B9816F, transparent)' }}
      />
      <div
        className="float-rose-2 absolute top-24 left-16 w-8 h-8 rounded-full opacity-15 pointer-events-none"
        style={{ background: '#B9816F' }}
      />
      <div
        className="float-rose-1 absolute bottom-16 right-10 w-20 h-20 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B9816F, transparent)' }}
      />
      <div
        className="float-rose-2 absolute bottom-32 right-24 w-10 h-10 rounded-full opacity-15 pointer-events-none"
        style={{ background: '#B9816F' }}
      />
      <div
        className="float-rose-1 absolute top-1/3 left-4 w-6 h-6 rounded-full opacity-25 pointer-events-none"
        style={{ background: '#D4A092' }}
      />
      <div
        className="float-rose-2 absolute top-1/4 right-8 w-12 h-12 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C49080, transparent)' }}
      />

      {/* Center glass card */}
      <div
        className="relative z-10 fade-rise text-center px-10 py-12 max-w-md w-full mx-4 hover:scale-[1.03] transition-all duration-500 cursor-default"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(255,255,255,0.50)',
          border: '1px solid rgba(255,255,255,0.60)',
          borderRadius: '32px',
          boxShadow: '0 30px 100px rgba(170,110,90,0.18)',
        }}
      >
        {/* Small label */}
        <p
          className="uppercase tracking-widest text-xs mb-5"
          style={{ fontFamily: 'Inter, sans-serif', color: '#A87563', letterSpacing: '0.18em' }}
        >
          İSTANBUL&apos;UN PREMİUM GÜZELLİK DENEYİMİ
        </p>

        {/* Logo */}
        <h1
          className="text-5xl tracking-tight mb-1"
          style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
        >
          HÜLYA
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm mb-6"
          style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
        >
          Hair &amp; Beauty Studio
        </p>

        {/* Divider */}
        <div
          className="mx-auto mb-6"
          style={{ height: '1px', width: '60px', background: '#B9816F' }}
        />

        {/* Headline */}
        <h2
          className="text-4xl mb-4 leading-[0.95]"
          style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
        >
          Saçınızın En<br />
          <em style={{ fontStyle: 'italic' }}>Zarif Hali</em> İçin
        </h2>

        {/* Description */}
        <p
          className="text-sm mb-8 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
        >
          İstanbul'un kalbinde, profesyonel ekibimiz ve premium ürünlerimizle
          sizi en güzel halinize kavuşturmak için buradayız.
        </p>

        {/* Button */}
        <button
          onClick={onEnter}
          className="rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #B9816F',
            color: '#B9816F',
            background: 'transparent',
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
