import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SERVICES = [
  { n: '01', title: 'Saç Kesimi & Tasarım',         desc: 'Yüz hatlarınıza özel kesim ve şekillendirme',    tag: 'SIGNATURE'  },
  { n: '02', title: 'Renk & Ombre',                  desc: 'Profesyonel boyama, ombre ve balayage',          tag: 'COLOR'      },
  { n: '03', title: 'Keratin Bakım',                  desc: 'Derinlemesine besleyen premium keratin tedavisi', tag: 'TREATMENT'  },
  { n: '04', title: 'Röfle',                          desc: 'Modern tekniklerle doğal parlaklık',             tag: 'COLOR'      },
  { n: '05', title: 'Gelin Saçı',                    desc: 'Özel gününüz için unutulmaz tasarımlar',         tag: 'SPECIAL'    },
  { n: '06', title: 'Profesyonel Makyaj',             desc: 'Her ortama özel makyaj uygulaması',             tag: 'BEAUTY'     },
]

export default function AwardsServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const rowRefs    = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 82%' },
      })

      rowRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
            delay: i * 0.06,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hizmetler"
      className="py-16 md:py-28 px-6 md:px-14"
      style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.10)' }}
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6"
          style={{ opacity: 0 }}
        >
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 14 }}>
              Hizmetlerimiz
            </p>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2.5rem, 6vw, 7.5rem)', lineHeight: 0.92, letterSpacing: '-1px' }}>
              Lüks Güzellik<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Deneyimi</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.83rem', lineHeight: 1.75, maxWidth: 300 }}>
            Her hizmetimiz, size özel hazırlanmış premium<br />bir deneyim sunmak için tasarlandı.
          </p>
        </div>

        {/* Tokat regional link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-6">
            <Link
              to="/tokat-kuafor"
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.75rem', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Tokat Kuaför Hizmetleri →
            </Link>
            <Link
              to="/tokat-gelin-saci"
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.75rem', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Tokat Gelin Saçı Tasarımları →
            </Link>
          </div>
        </motion.div>

        {/* Rows */}
        <div style={{ borderTop: '1px solid rgba(42,33,29,0.10)' }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              ref={el => { rowRefs.current[i] = el }}
              className="group flex items-center justify-between gap-6 py-7 md:py-9"
              style={{ borderBottom: '1px solid rgba(42,33,29,0.10)', opacity: 0, cursor: 'default' }}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.62rem', letterSpacing: '0.22em', minWidth: 26 }}>
                  {s.n}
                </span>
                <div>
                  <h3
                    className="transition-colors duration-300 group-hover:text-[#C98F7A]"
                    style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.78rem', marginTop: 3 }}>
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Tag pill — hidden on mobile */}
              <span
                className="hidden md:inline-block self-center flex-shrink-0"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(42,33,29,0.50)',
                  fontSize: '0.56rem',
                  letterSpacing: '0.28em',
                  border: '1px solid rgba(42,33,29,0.12)',
                  padding: '4px 10px',
                  borderRadius: 100,
                  transition: 'color 0.3s, border-color 0.3s',
                }}
              >
                {s.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
