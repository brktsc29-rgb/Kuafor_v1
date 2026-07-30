import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  {
    quote:  'İlk kez bu kadar memnun ayrıldığım bir kuaför oldu. Sarı saçı tutturması zor olmasına rağmen tam istediğim gibi yapıldı — saçımın yapısına uygun önerilerde de bulunuldu. İşçilik çok özenli, ürünler kaliteli, hijyen titiz. Gönül rahatlığıyla tavsiye ederim.',
    author: 'Setenay',
    role:   'Saç Boyama Müşterisi',
  },
  {
    quote:  'Yıllardır giderim, yaptırdığım her işlemden çok memnunum. Her zaman ne istediğimi anlar ve en güzel şekilde yaparlar. Sibel hanım ve ekibine güler yüzleri ve müşteri ilişkileri için de ayrıca teşekkür ederim. Kesinlikle gitmenizi tavsiye ederim.',
    author: 'İremnur G.',
    role:   'Yıllık Müşteri',
  },
  {
    quote:  'Kayseri\'den Tokat\'a kızımın gelin saçı ve makyajı için geldik — harika ilgilendiler. Güler yüzlü personelleri, özellikle Sibel hanım ve kızları olağanüstüydü. Tanıdığım kuaförlerin içinde tek derim. Tokata geldikçe uğrayacağım, tek adres benim için Hülya Kuaför.',
    author: 'Fatma Durdu K.',
    role:   'Gelin Annesi · Kayseri',
  },
  {
    quote:  'Çok hoş ve güler yüzle karşılandık, her saniye ilgililerdi. Saç ve makyaj tam istediğim gibi oldu — memnuniyetle çıktım. Bundan sonra benim için Hülya Kuaför.',
    author: 'Asya',
    role:   'Saç & Makyaj Müşterisi',
  },
  {
    quote:  'Turhal\'da kuaför bilmiyordum, iyi ki tanıştık. Gelin saçımı ve makyajımı yaptılar, herkes bayıldı. Sürekli benimle ilgilendiler, düğün salonuna da geldiler. Hiç aynaya bile bakmadım, o kadar kusursuzdu her şey. Ailecek çok memnunuz, herkese tavsiye ediyoruz.',
    author: 'Esra E.',
    role:   'Gelin · Mekan Hizmeti',
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
      {/* Giant decorative image */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <img
          src="/images/hulya-studio-turhal-salon.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.07]"
        />
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
