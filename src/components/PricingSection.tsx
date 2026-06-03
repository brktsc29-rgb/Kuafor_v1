interface PricingPlan {
  label: string
  name: string
  price: string
  services: string[]
  highlight: boolean
  badge?: string
}

const plans: PricingPlan[] = [
  {
    label: 'Başlangıç',
    name: 'Temel Paket',
    price: '250',
    highlight: false,
    services: [
      'Saç Kesimi & Fön',
      'Saç Yıkama & Maske',
      'Saç Bakım Kremi',
      'Stil Danışmanlığı',
    ],
  },
  {
    label: 'En Popüler',
    name: 'Premium Paket',
    price: '750',
    highlight: true,
    badge: 'Popüler Seçim',
    services: [
      'Saç Kesimi & Şekillendirme',
      'Ombre veya Röfle',
      'Derin Keratin Bakım',
      'Saç Yıkama & Maske',
      'Kafa Derisi Masajı',
      'Stil Danışmanlığı',
    ],
  },
  {
    label: 'Özel Deneyim',
    name: 'Signature Paket',
    price: '1500',
    highlight: false,
    services: [
      'Saç Kesimi & Profesyonel Şekillendirme',
      'Tam Ombre veya Balayage',
      'Premium Keratin Tedavisi',
      'Özel Saç Bakım Protokolü',
      'Kafa Derisi Aromatik Masajı',
      'Profesyonel Makyaj',
      'Gelin/Özel Gün Saçı',
      'VIP Konsültasyon & Kişisel Bakım Planı',
    ],
  },
]

export default function PricingSection() {
  return (
    <section
      id="fiyatlar"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8F5 0%, #FDF1EA 50%, #FFF8F5 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(185,129,111,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Fiyatlandırma
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            Sizin İçin En Uygun Paket
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ height: '2px', width: '48px', background: '#B9816F', borderRadius: '1px' }}
          />
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Her bütçeye uygun, lüks ve profesyonel güzellik paketlerimizden
            size en uygun olanı seçin.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.highlight ? 'md:scale-[1.04] shadow-2xl' : 'hover:shadow-xl'}`}
              style={
                plan.highlight
                  ? {
                      background: 'linear-gradient(160deg, #FFF8F5 0%, #FDF0E8 100%)',
                      border: '2px solid #B9816F',
                      boxShadow: '0 30px 80px rgba(185,129,111,0.22)',
                    }
                  : {
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      background: 'rgba(255,255,255,0.72)',
                      border: '1px solid #E9D6CE',
                      boxShadow: '0 4px 24px rgba(185,129,111,0.06)',
                    }
              }
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'linear-gradient(135deg, #B9816F, #D4A092)',
                    boxShadow: '0 4px 16px rgba(185,129,111,0.35)',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Label */}
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: 'Inter, sans-serif', color: plan.highlight ? '#B9816F' : '#7A6A63' }}
              >
                {plan.label}
              </p>

              {/* Plan name */}
              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                >
                  itibaren
                </span>
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: 'Instrument Serif, serif', color: plan.highlight ? '#B9816F' : '#1F1A17' }}
                >
                  {plan.price}₺
                </span>
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ height: '1px', background: plan.highlight ? 'rgba(185,129,111,0.25)' : '#E9D6CE' }}
              />

              {/* Services list */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.services.map((svc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: plan.highlight ? 'rgba(185,129,111,0.15)' : 'rgba(185,129,111,0.08)',
                        border: `1px solid rgba(185,129,111,${plan.highlight ? '0.35' : '0.20'})`,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#B9816F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span
                      className="text-sm leading-tight"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33' }}
                    >
                      {svc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#iletisim"
                className="block text-center rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={
                  plan.highlight
                    ? {
                        fontFamily: 'Inter, sans-serif',
                        background: 'linear-gradient(135deg, #B9816F, #C9917F)',
                        color: 'white',
                        boxShadow: '0 4px 20px rgba(185,129,111,0.30)',
                      }
                    : {
                        fontFamily: 'Inter, sans-serif',
                        border: '1.5px solid #B9816F',
                        color: '#B9816F',
                        background: 'transparent',
                      }
                }
              >
                Randevu Al
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-xs"
          style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
        >
          Fiyatlar saç uzunluğuna ve hizmet kapsamına göre değişebilir. Kesin fiyat için danışmanlık randevusu alın.
        </p>
      </div>
    </section>
  )
}
