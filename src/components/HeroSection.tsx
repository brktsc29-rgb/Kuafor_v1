export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: '#FFF8F5' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.08) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(185,129,111,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="fade-rise">
            <p
              className="text-xs uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              GÜZELLİĞİNİZE DEĞER KATIYORUZ
            </p>

            <h1
              className="text-5xl lg:text-7xl mb-4 leading-[1.0]"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
            >
              Saçınızın En<br />
              <em
                className="not-italic"
                style={{ fontStyle: 'italic', color: '#B9816F' }}
              >
                Zarif Hali
              </em>{' '}
              İçin
            </h1>

            <p
              className="text-base mb-3"
              style={{ fontFamily: 'Instrument Serif, serif', color: '#7A6A63', fontStyle: 'italic', fontSize: '1.15rem' }}
            >
              Profesyonel Dokunuş
            </p>

            <p
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
            >
              Modern kesim, profesyonel renklendirme, bakım ve özel gün saç tasarımlarıyla
              kendinizi yeniden keşfedin. Her ziyarette lüksü hissedin.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/905001234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: '#25D366',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Randevu Al
              </a>

              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  border: '1.5px solid #B9816F',
                  color: '#B9816F',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#B9816F'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#B9816F'
                }}
              >
                Hizmetleri İncele
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="text-base">⭐</span>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                  >
                    4.9 / 5
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  >
                    Müşteri Memnuniyeti
                  </div>
                </div>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: '#E9D6CE' }}
              />
              <div className="flex items-center gap-2">
                <span className="text-base">👩</span>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                  >
                    10.000+
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  >
                    Mutlu Müşteri
                  </div>
                </div>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: '#E9D6CE' }}
              />
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                  >
                    İstanbul
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  >
                    Bağcılar
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="fade-rise-delay relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating rose-gold blur shapes */}
              <div
                className="float-rose-1 absolute -top-6 -left-6 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'rgba(185,129,111,0.15)', filter: 'blur(20px)' }}
              />
              <div
                className="float-rose-2 absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'rgba(185,129,111,0.12)', filter: 'blur(24px)' }}
              />

              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Lüks saç tasarımı"
                className="relative z-10 w-full max-w-[480px] object-cover"
                style={{
                  borderRadius: '36px',
                  boxShadow: '0 40px 80px rgba(31,26,23,0.15), 0 0 0 1px rgba(233,214,206,0.3)',
                  aspectRatio: '3/4',
                }}
              />

              {/* Floating rating card */}
              <div
                className="absolute bottom-8 -left-8 z-20 px-4 py-3 flex items-center gap-3"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(233,214,206,0.6)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(185,129,111,0.15)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: '#B9816F' }}
                >
                  H
                </div>
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                  >
                    HÜLYA Studio
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
                  >
                    ★★★★★ Mükemmel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
