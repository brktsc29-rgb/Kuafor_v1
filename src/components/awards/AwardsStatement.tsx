import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const LINE1 = ['İyi', 'bir', 'saç', 'tasarımı', 'görünümünüzü', 'değiştirir.']
const LINE2 = ['Kusursuz', 'bir', 'deneyim', 'ise', 'hissettiklerinizi.']

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

  const allWords = [...LINE1, ...LINE2]

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-32 px-6 md:px-14"
      style={{ background: '#F8F5F2' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <p
          aria-label={allWords.join(' ')}
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#2A211D',
            fontSize: 'clamp(2.4rem, 4.8vw, 5.8rem)',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
            marginBottom: '2rem',
          }}
        >
          <span style={{ display: 'block' }}>
            {LINE1.map((w, i) => (
              <span
                key={i}
                ref={el => { wordRefs.current[i] = el }}
                style={{ opacity: 0.1, display: 'inline-block', marginRight: '0.28em', marginBottom: '0.1em' }}
              >
                {w}
              </span>
            ))}
          </span>
          <span style={{ display: 'block' }}>
            {LINE2.map((w, i) => (
              <span
                key={i}
                ref={el => { wordRefs.current[LINE1.length + i] = el }}
                style={{ opacity: 0.1, display: 'inline-block', marginRight: '0.28em', marginBottom: '0.1em', color: '#C98F7A', fontStyle: 'italic' }}
              >
                {w}
              </span>
            ))}
          </span>
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(42,33,29,0.60)',
            fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
            lineHeight: 1.8,
            maxWidth: 580,
          }}
        >
          Saç kesiminden renklendirmeye, gelin saçından profesyonel makyaja kadar her detayda kendinizi özel hissedeceğiniz bir güzellik deneyimi sunuyoruz.
        </motion.p>
      </div>
    </section>
  )
}
