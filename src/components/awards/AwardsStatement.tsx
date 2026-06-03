import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WORDS = [
  'Güzellik', 'bir', 'his,', 'bir', 'deneyim', '—', 'sanatın',
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
      className="py-36 md:py-56 px-6 md:px-14"
      style={{ background: '#0D0B09' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <p
          aria-label={WORDS.join(' ')}
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#FFF8F5',
            fontSize: 'clamp(2rem, 4.8vw, 5.8rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.3px',
          }}
        >
          {WORDS.map((w, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el }}
              style={{ opacity: 0.1, display: 'inline-block', marginRight: '0.28em', marginBottom: '0.1em' }}
            >
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
