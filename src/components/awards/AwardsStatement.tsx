import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WORDS = [
  'Güzellik', 'bir', 'his,', 'bir', 'deneyim,', 'sanatın',
  'en', 'samimi', 'biçimi.', 'Her', 'müşterimiz', 'benzersiz,',
  'her', 'ziyaret', 'bir', 'dönüşüm', 'hikayesi.',
]

export default function AwardsStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs   = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = wordRefs.current.filter(Boolean) as HTMLSpanElement[]

      gsap.fromTo(
        els,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.07,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 68%',
            end: 'center 30%',
            scrub: 0.7,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-32 px-6 md:px-14"
      style={{ background: '#F8F5F2' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <p
          aria-label={WORDS.join(' ')}
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#2A211D',
            fontSize: 'clamp(2.4rem, 4.8vw, 5.8rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.3px',
          }}
        >
          {WORDS.map((w, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el }}
              style={{ opacity: 0.1, display: 'inline-block', marginRight: '0.28em', marginBottom: '0.1em', color: '#2A211D' }}
            >
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
