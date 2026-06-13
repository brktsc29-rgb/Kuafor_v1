import { useRef } from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: '20+',  label: 'Yıllık Deneyim',     sub: '2005\'ten beri Turhal\'da' },
  { value: '5',     label: 'İlçe Müşteri Tabanı', sub: 'Tokat, Turhal, Zile, Erbaa, Niksar' },
  { value: '6',    label: 'Uzman Hizmet',         sub: 'Kesim, renk, bakım ve daha fazlası' },
  { value: '100%', label: 'Kişiye Özel',          sub: 'Her işlem saça göre planlanır' },
]

const SIGNALS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: '2005\'ten Beri',
    body: 'Turhal\'da yirmi yılı aşkın süredir aynı özenle hizmet veriyoruz. Güven, tekrarlayan müşterilerimizle ölçülür.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Uzman Kadro',
    body: 'Sibel Erturhan ve Damla Erturhan, mesleki eğitimlerini sürekli yeniliyor. Her teknik ustalıkla uygulanıyor.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Premium Ürünler',
    body: 'Saç sağlığını ön planda tutarak yalnızca güvenilir, profesyonel ürünler kullanıyoruz.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Tokat\'ta Kolay Ulaşım',
    body: 'Turhal merkez konum, Tokat Merkez, Zile, Erbaa ve Niksar\'dan rahatlıkla ulaşılabilir mesafede.',
  },
]

export default function AwardsTrust() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      style={{ background: '#2A211D', padding: 'clamp(56px, 9vw, 108px) 24px' }}
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 md:mb-20" style={{ border: '1px solid rgba(248,245,242,0.08)', borderRadius: 16, overflow: 'hidden' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ padding: 'clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)', background: 'rgba(248,245,242,0.03)' }}
            >
              <p style={{ fontFamily: 'Instrument Serif, serif', color: '#C98F7A', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '-1px', marginBottom: 8 }}>
                {s.value}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#F8F5F2', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.04em', marginBottom: 4 }}>
                {s.label}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.38)', fontSize: '0.68rem', lineHeight: 1.5 }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
              Neden Biz
            </p>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1px' }}>
              Güven ve<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Ustalık</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.5)', fontSize: '0.83rem', lineHeight: 1.75, maxWidth: 320 }}>
            Tokat'ta güzellik deneyimini fark yaratan detaylar belirler. Biz bu detaylara
            yirmi yıldır önem veriyoruz.
          </p>
        </div>

        {/* Trust signals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SIGNALS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'rgba(248,245,242,0.04)',
                border: '1px solid rgba(248,245,242,0.08)',
                borderRadius: 14,
                padding: '28px 26px',
              }}
            >
              <div style={{ color: '#C98F7A', marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.1rem', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.8rem', lineHeight: 1.75 }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
