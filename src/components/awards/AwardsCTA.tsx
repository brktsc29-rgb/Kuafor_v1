import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const WHATSAPP_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function AwardsCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const lines = headRef.current?.querySelectorAll('.cta-line')
      if (lines) {
        gsap.fromTo(lines, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 78%' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="iletisim"
      className="relative py-32 md:py-52 px-6 md:px-14 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F0D0B 0%, #1A1310 50%, #0F0D0B 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(185,129,111,0.1) 0%, transparent 65%)' }}
      />

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}
        >
          Randevu Al
        </motion.p>

        <h2
          ref={headRef}
          style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(3rem, 9vw, 11rem)', lineHeight: 0.9, letterSpacing: '-1.5px', marginBottom: 44 }}
        >
          <div className="cta-line" style={{ overflow: 'hidden', opacity: 0 }}>
            <span style={{ display: 'block' }}>Güzelliğiniz</span>
          </div>
          <div className="cta-line" style={{ overflow: 'hidden', opacity: 0 }}>
            <em style={{ color: '#B9816F', fontStyle: 'italic' }}>Bizi Bekliyor</em>
          </div>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 48px' }}
        >
          Profesyonel ekibimizle tanışın, size özel bakım planınızı birlikte oluşturalım.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
            style={{ fontFamily: 'Inter, sans-serif', background: '#B9816F', color: '#FFF8F5' }}
            whileHover={{ scale: 1.06, background: '#C9917F' } as never}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {WHATSAPP_SVG}
            WhatsApp&apos;tan Randevu Al
          </motion.a>

          <motion.a
            href="tel:+905001234567"
            className="flex items-center gap-2 rounded-full px-8 py-4 text-[0.82rem]"
            style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(185,129,111,0.32)', color: '#B9816F' }}
            whileHover={{ borderColor: '#B9816F', scale: 1.06 } as never}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            +90 500 123 45 67
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14"
          style={{ fontFamily: 'Inter, sans-serif', color: '#2A1A13', fontSize: '0.72rem', letterSpacing: '0.08em' }}
        >
          Güneşli Mah. Güneşli Cad. No:42 — Bağcılar, İstanbul
        </motion.p>
      </div>
    </section>
  )
}
