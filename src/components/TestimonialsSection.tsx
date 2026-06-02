interface Testimonial {
  name: string
  initial: string
  rating: number
  text: string
  service: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ayşe Kaya',
    initial: 'A',
    rating: 5,
    text: 'Hülya Hanım ve ekibi gerçekten muhteşem! Ombre saç boyaması için gittim ve hayallerimin ötesinde bir sonuç aldım. Saçım hiç bu kadar sağlıklı ve parlak olmamıştı. Kesinlikle tavsiye ediyorum, artık başka bir yere gitmem mümkün değil.',
    service: 'Ombre & Sombre',
  },
  {
    name: 'Zeynep Arslan',
    initial: 'Z',
    rating: 5,
    text: 'Gelin saçım için HÜLYA Studio\'yu tercih ettim ve en doğru kararı verdiğimi düğün günümde anladım. Sabah 8\'de başladılar, özenle çalıştılar, her detayı mükemmel yaptılar. Fotoğraflara baktığımda hâlâ inanamıyorum ne kadar güzel görünüyorum!',
    service: 'Gelin Saçı',
  },
  {
    name: 'Fatma Demir',
    initial: 'F',
    rating: 5,
    text: 'Keratin bakımını yaptırdım ve adeta yeniden doğdum. Yıllarca frizz sorunu yaşadım, artık geçti. Salon çok şık ve ferah, müzik seçimi bile ayrı bir lüks katıyor ortama. Fiyatlar kalitesiyle orantılı, parasını fazlasıyla alıyorsunuz.',
    service: 'Keratin Bakım',
  },
  {
    name: 'Elif Çelik',
    initial: 'E',
    rating: 5,
    text: 'Röfle için ilk kez geldim ama artık düzenli müşteriyim. Stilistim tam istediğimi anladı, hiç anlatmama gerek kalmadı. Sonuç inanılmaz doğal ve şık. Arkadaşlarım saçımı fark edince hepsine HÜLYA\'yı önerdim.',
    service: 'Röfle',
  },
]

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDF1EA 0%, #FFF8F5 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(185,129,111,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Müşteri Yorumları
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            Mutlu Müşterilerimiz
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ height: '2px', width: '48px', background: '#B9816F', borderRadius: '1px' }}
          />
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            10.000&apos;den fazla mutlu müşterimizin deneyimleri, kalitemizi en
            iyi şekilde anlatıyor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid #E9D6CE',
                boxShadow: '0 4px 24px rgba(185,129,111,0.08)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: '#B9816F', fontSize: '14px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33' }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service tag */}
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(185,129,111,0.10)',
                  color: '#B9816F',
                  border: '1px solid rgba(185,129,111,0.20)',
                }}
              >
                {t.service}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #B9816F, #D4A092)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  >
                    Doğrulanmış Müşteri
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
