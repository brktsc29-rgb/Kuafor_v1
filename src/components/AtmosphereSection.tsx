export default function AtmosphereSection() {
  const features = [
    {
      title: 'Premium Ürünler',
      desc: 'Saç sağlığınız için yalnızca en seçkin, uluslararası markaların ürünlerini kullanıyoruz.',
    },
    {
      title: 'Uzman Ekip',
      desc: 'Yılların deneyimiyle yetişmiş, sürekli eğitim alan stilistlerimiz emrinizdedir.',
    },
    {
      title: 'Kişisel Konsültasyon',
      desc: 'Her müşterimize özel danışmanlık ve önerilerle hayalinizdeki saça kavuşuyorsunuz.',
    },
  ]

  return (
    <section
      id="hakkimizda"
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFF8F5' }}
    >
      {/* Decorative accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.07) 0%, transparent 70%)',
          transform: 'translate(30%, -20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative">
            {/* Decorative rose-gold shape behind image */}
            <div
              className="absolute -bottom-6 -left-6 w-full h-full rounded-[40px] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(185,129,111,0.15), rgba(185,129,111,0.05))',
                border: '1px solid rgba(185,129,111,0.20)',
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1560066984-138daaa6e4b6?auto=format&fit=crop&w=2400&q=95"
              alt="HÜLYA Beauty Studio — salon iç mekan"
              className="relative w-full object-cover"
              style={{
                borderRadius: '36px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.14)',
                aspectRatio: '4/3',
              }}
            />

            {/* Floating stat card */}
            <div
              className="absolute right-0 sm:-right-5 bottom-10 px-5 py-4"
              style={{
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                background: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(233,214,206,0.7)',
                borderRadius: '20px',
                boxShadow: '0 12px 40px rgba(185,129,111,0.18)',
              }}
            >
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: 'Instrument Serif, serif', color: '#B9816F' }}
              >
                10+
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
              >
                Yıllık Deneyim
              </p>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              Salonumuz Hakkında
            </p>

            <h2
              className="text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
            >
              Lüks, Konfor<br />ve Profesyonellik
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
            >
              Tokat'un kalbinde, Turhal'da yer alan HÜLYA Beauty Studio,
              güzellik ritüellerini bir deneyime dönüştürmek için tasarlandı.
              Modern estetik ile geleneksel bakım anlayışını harmanlayan salonumuzda,
              her ziyaret sizi kendinizin en güzel haliyle karşılaştırır.
            </p>

            {/* Features */}
            <ul className="space-y-5 mb-10">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(185,129,111,0.12)', border: '1px solid rgba(185,129,111,0.30)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#B9816F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                    >
                      {feat.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#iletisim"
              className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(135deg, #B9816F, #C9917F)',
                boxShadow: '0 4px 20px rgba(185,129,111,0.30)',
              }}
            >
              Salonumuzu Keşfet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
