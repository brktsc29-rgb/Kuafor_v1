import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  {
    quote:  'HÜLYA Studio\'da her ziyaret bir dönüşüm. Saçlarım hiç bu kadar sağlıklı ve güzel görünmemişti.',
    author: 'Zeynep K.',
    role:   'Düzenli Müşteri',
  },
  {
    quote:  'Gelin saçım için hayalimdeki günü mükemmel kılan, tereddütsüz önerdiğim tek adres.',
    author: 'Elif M.',
    role:   'Gelin',
  },
  {
    quote:  'Profesyonellik ve kişisel ilginin mükemmel birleşimi. Artık başka bir yere gitmeyi düşünemiyorum.',
    author: 'Selin A.',
    role:   'Sadık Müşteri',
  },
]

export default function AwardsTestimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % ITEMS.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      className="relative py-20 md:py-36 px-6 md:px-14 overflow-hidden"
      style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.10)' }}
    >
      {/* Giant decorative quote mark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(14rem, 35vw, 40rem)', color: 'rgba(42,33,29,0.04)', lineHeight: 1 }}
      >
        &ldquo;
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 40 }}>
          Müşteri Deneyimleri
        </p>

        {/* Quote */}
        <div className="min-h-[180px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <blockquote
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  color: '#2A211D',
                  fontSize: 'clamp(1.6rem, 3.8vw, 4.2rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.4px',
                  fontStyle: 'italic',
                  maxWidth: 920,
                  marginBottom: 28,
                }}
              >
                &ldquo;{ITEMS[idx].quote}&rdquo;
              </blockquote>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.82rem', fontWeight: 600 }}>
                {ITEMS[idx].author}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.55)', fontSize: '0.72rem', marginTop: 3 }}>
                {ITEMS[idx].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex gap-3 mt-10">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                height: 5,
                width: i === idx ? 32 : 5,
                borderRadius: 3,
                background: i === idx ? '#C98F7A' : 'rgba(42,33,29,0.18)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.35s ease, background 0.35s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
