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

  const PILLARS = [
    { num: '01', title: 'Kişisel İlgi', desc: 'Her müşterimizi tanırız. Saçınızı, tercihlerinizi, beklentilerinizi.' },
    { num: '02', title: 'Kaliteli Ürünler', desc: 'Seçkin markalar ve kanıtlanmış tekniklerle güvenilir sonuçlar.' },
    { num: '03', title: '20 Yıllık Deneyim', desc: 'Turhal\'da yıllar içinde kazandığımız güven ve uzmanlık.' },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-40 px-6 md:px-14"
      style={{ background: '#F8F5F2' }}
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 32 }}
        >
          Felsefemiz
        </motion.p>

        {/* Animated heading */}
        <p
          aria-label={allWords.join(' ')}
          style={{
            fontFamily: 'Instrument Serif, serif',
            color: '#2A211D',
            fontSize: 'clamp(2.4rem, 4.8vw, 5.8rem)',
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
            marginBottom: '2.5rem',
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

        {/* Subtext + divider row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mb-20 md:mb-28">
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
              maxWidth: 520,
              flex: '0 0 auto',
            }}
          >
            Saç kesiminden renklendirmeye, gelin saçından profesyonel makyaja kadar her detayda kendinizi özel hissedeceğiniz bir güzellik deneyimi sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            style={{ flex: 1, height: 1, background: 'rgba(42,33,29,0.12)', transformOrigin: 'left', minWidth: 60 }}
          />
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="py-8 sm:py-10"
              style={{
                borderTop: '1px solid rgba(42,33,29,0.12)',
                paddingRight: i < 2 ? '2.5rem' : 0,
                borderRight: i < 2 ? '1px solid rgba(42,33,29,0.12)' : 'none',
                paddingLeft: i > 0 ? '2.5rem' : 0,
              }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.22em', marginBottom: 16 }}>
                {p.num}
              </p>
              <p style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.4rem', marginBottom: 10 }}>
                {p.title}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.55)', fontSize: '0.82rem', lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
