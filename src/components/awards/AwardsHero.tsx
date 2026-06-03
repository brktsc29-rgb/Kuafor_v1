import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

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
  const sectionRef  = useRef<HTMLElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const dividerRef  = useRef<HTMLDivElement>(null)
  const subRef      = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const lineInners = titleRef.current?.querySelectorAll('.line-inner')
      const tl = gsap.timeline({ delay: 0.15 })

      if (lineInners) {
        tl.fromTo(
          lineInners,
          { yPercent: 105 },
          { yPercent: 0, duration: 1.0, stagger: 0.12, ease: 'power4.out' }
        )
      }

      tl.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: 'expo.out', transformOrigin: 'left center' },
        '-=0.5'
      )
        .fromTo(
          subRef.current,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' },
          '-=0.55'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.9 },
          '-=0.2'
        )

      // Parallax: video drifts down as you scroll
      gsap.to(videoRef.current, {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Title + sub fade out on early scroll
      gsap.to([titleRef.current, subRef.current, dividerRef.current], {
        y: -70,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '28% top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [active])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-end overflow-hidden"
      style={{ height: '100svh', background: '#080604' }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'scale(1.08)', transformOrigin: 'center center' }}
      />

      {/* Cinematic dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.45) 38%, rgba(8,6,4,0.1) 65%, rgba(8,6,4,0.0) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.045,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-14 pb-14 md:pb-20 max-w-screen-xl mx-auto">
        {/* Overline */}
        <p
          className="mb-6 md:mb-8"
          style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F', fontSize: '0.62rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}
        >
          İstanbul · Bağcılar · Est. 2016
        </p>

        {/* Split-line title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#FFF8F5',
            fontSize: 'clamp(4rem, 15vw, 17rem)',
            letterSpacing: '-2.5px',
            lineHeight: 0.88,
            margin: 0,
          }}
        >
          {TITLE_LINES.map((line, i) => (
            <SplitLine key={i} text={line} />
          ))}
        </h1>

        {/* Divider */}
        <div
          ref={dividerRef}
          style={{ height: 1, background: 'rgba(255,248,245,0.15)', margin: '28px 0 22px', transform: 'scaleX(0)', transformOrigin: 'left' }}
        />

        {/* Sub row */}
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
