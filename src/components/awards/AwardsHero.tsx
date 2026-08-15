import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TITLE_LINES = ['HÜLYA', 'HAIR &', 'BEAUTY']

function SplitLine({ text }: { text: string }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0.88 }}>
      <div className="line-inner" style={{ display: 'block' }}>
        {text.split('').map((ch, i) => (
          <span key={i} style={{ display: 'inline-block' }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AwardsHero({ active }: { active: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const subRef     = useRef<HTMLDivElement>(null)
  const scrollRef  = useRef<HTMLDivElement>(null)

  // ── Mouse-parallax motion values ─────────────────────────────
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Silky spring — different stiffness per layer for depth feel
  const sX = useSpring(rawX, { stiffness: 45, damping: 18 })
  const sY = useSpring(rawY, { stiffness: 45, damping: 18 })
  const fX = useSpring(rawX, { stiffness: 90, damping: 22 })
  const fY = useSpring(rawY, { stiffness: 90, damping: 22 })

  // Layer 1: main portrait — moves with mouse, slow
  const l1x = useTransform(sX, [-0.5, 0.5], ['-20px', '20px'])
  const l1y = useTransform(sY, [-0.5, 0.5], ['-14px', '14px'])
  // Layer 3: decorative lines — fast, dramatic
  const l3x = useTransform(fX, [-0.5, 0.5], ['-32px', '32px'])
  const l3y = useTransform(fY, [-0.5, 0.5], ['-22px', '22px'])

  useEffect(() => {
    if (!active) return

    const section = sectionRef.current!
    const isMouse = window.matchMedia('(hover: hover)').matches

    // Mouse tracking
    let rafId = 0
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const r = section.getBoundingClientRect()
        rawX.set((e.clientX - r.left) / r.width  - 0.5)
        rawY.set((e.clientY - r.top)  / r.height - 0.5)
      })
    }

    if (isMouse) section.addEventListener('mousemove', onMouseMove)

    // GSAP: text entry + scroll-out
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const lineInners = titleRef.current?.querySelectorAll('.line-inner')
      const tl = gsap.timeline({ delay: 0.15 })

      if (lineInners) {
        tl.fromTo(lineInners,
          { yPercent: 108 },
          { yPercent: 0, duration: 1.05, stagger: 0.12, ease: 'power4.out' }
        )
      }

      tl.fromTo(dividerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.95, ease: 'expo.out', transformOrigin: 'left center' },
        '-=0.55'
      )
      .fromTo(subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.55'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.0 },
        '-=0.2'
      )

      // Content fades + rises on scroll
      gsap.to([titleRef.current, subRef.current, dividerRef.current], {
        opacity: 0, ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '28% top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => {
      if (isMouse) section.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      ctx.revert()
    }
  }, [active, rawX, rawY])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-end overflow-hidden"
      style={{ height: '100svh', background: '#080604', zIndex: 0 }}
    >
      {/* ── LAYER 1 · Hero video (slowest parallax) ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: '-20px', x: l1x, y: l1y }}
      >
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.88) contrast(1.06) saturate(1.12)' }}
        />
      </motion.div>

      {/* ── Warm rose-gold center glow ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 65% at 62% 42%, rgba(185,129,111,0.18) 0%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* ── LAYER 3 · Decorative rose-gold lines (fastest parallax) ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{ x: l3x, y: l3y }}
      >
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '53%', top: '12%',
          width: 1, height: 140,
          background: 'linear-gradient(to bottom, transparent, #B9816F 40%, #B9816F 60%, transparent)',
          opacity: 0.45,
        }} />
        {/* Horizontal line */}
        <div style={{
          position: 'absolute',
          right: '30%', bottom: '22%',
          height: 1, width: 80,
          background: 'linear-gradient(to right, transparent, #B9816F)',
          opacity: 0.35,
        }} />
        {/* Dot cluster */}
        {[
          { left: '52%', top: '11%' },
          { left: '51.6%', top: '28%' },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...pos,
            width: 4, height: 4,
            borderRadius: '50%',
            background: '#B9816F',
            opacity: 0.5,
          }} />
        ))}
      </motion.div>

      {/* ── Gradient veil — bottom-heavy, lighter in middle ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(8,6,4,0.90) 0%, rgba(8,6,4,0.32) 30%, rgba(8,6,4,0.06) 55%, rgba(8,6,4,0.0) 100%)',
        }}
      />
      {/* Left vignette for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(8,6,4,0.55) 0%, rgba(8,6,4,0.15) 42%, transparent 65%)' }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 md:px-14 pb-14 md:pb-20 max-w-screen-xl mx-auto">
        <p
          className="mb-6 md:mb-8"
          style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F', fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}
        >
          Turhal, Tokat · Est. 2010
        </p>

        <h1
          ref={titleRef}
          aria-label="Hülya Kuaför — Turhal Kadın Kuaförü · Tokat Gelin Saçı ve Saç Tasarımı"
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#FFF8F5',
            fontSize: 'clamp(3.2rem, 10vw, 11rem)',
            letterSpacing: '-2.5px',
            lineHeight: 0.88,
            margin: 0,
          }}
        >
          {TITLE_LINES.map((line, i) => (
            <SplitLine key={i} text={line} />
          ))}
        </h1>

        <div
          ref={dividerRef}
          style={{ height: 1, background: 'rgba(255,248,245,0.15)', margin: '28px 0 22px', transform: 'scaleX(0)', transformOrigin: 'left' }}
        />

        <div ref={subRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ opacity: 0 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Hair &amp; Beauty Studio
          </p>
          <p style={{ fontFamily: 'Instrument Serif, serif', color: '#B9816F', fontSize: '1.05rem', fontStyle: 'italic' }}>
            Saçınızın En Zarif Hali İçin
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 right-8 flex items-center gap-3"
        style={{ opacity: 0 }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33', fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          className="awards-scroll-line"
          style={{ width: 44, height: 1, background: 'linear-gradient(to right, #3A2A23, #B9816F)' }}
        />
      </div>
    </section>
  )
}
