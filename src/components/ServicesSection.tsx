const services = [
  {
    icon: '✂️',
    title: 'Saç Kesimi',
    desc: 'Yüz şeklinize ve yaşam tarzınıza özel profesyonel kesim ve şekillendirme.',
  },
  {
    icon: '🎨',
    title: 'Ombre & Sombre',
    desc: 'Rengin doğallıkla buluştuğu akıllı geçiş teknikleri ile çarpıcı sonuçlar.',
  },
  {
    icon: '✨',
    title: 'Röfle',
    desc: 'Saçınıza boyutsal ışıltı ve parlaklık katan premium röfle uygulamaları.',
  },
  {
    icon: '💆',
    title: 'Keratin Bakım',
    desc: 'Frizz\'e veda edin; keratin ile pürüzsüz, bakımlı ve sağlıklı saçlar.',
  },
  {
    icon: '👑',
    title: 'Gelin Saçı',
    desc: 'Hayatınızın en özel gününde mükemmel görünmeniz için özel tasarım.',
  },
  {
    icon: '💄',
    title: 'Profesyonel Makyaj',
    desc: 'Doğal günlük makyajdan dramatik gece stiline her tona uygun uygulama.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="py-24"
      style={{ background: '#FFF8F5' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-rise">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            UZMAN ELLERİN SANATI
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            Lüks Hizmetlerimiz
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ height: '1px', width: '60px', background: '#B9816F' }}
          />
          <p
            className="text-sm max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Her hizmetimiz, saçınızın en güzel haline ulaşması için premium ürünler
            ve uzman ekibimizle özenle sunulmaktadır.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'rgba(255,255,255,0.70)',
                border: '1px solid #E9D6CE',
                boxShadow: '0 4px 24px rgba(185,129,111,0.06)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(185,129,111,0.10)' }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
              >
                {svc.desc}
              </p>
              <div
                className="mt-5 flex items-center gap-1 text-xs font-medium transition-colors duration-200 group-hover:text-[#B9816F]"
                style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
              >
                Detaylar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
