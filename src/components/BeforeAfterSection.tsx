export default function BeforeAfterSection() {
  return (
    <section
      id="donusum"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8F5 0%, #FDF1EA 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(185,129,111,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Gerçek Sonuçlar
          </p>
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            Dönüşüm Hikayeleri
          </h2>
          <div
            className="mx-auto mb-4"
            style={{ height: '2px', width: '48px', background: '#B9816F', borderRadius: '1px' }}
          />
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Uzman ekibimizin yarattığı gerçek dönüşümleri keşfedin. Her saç,
            kendi benzersiz güzelliğe kavuşmayı bekliyor.
          </p>
        </div>

        {/* Before / After Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-4xl mx-auto">
          {/* Before Card */}
          <div
            className="relative w-full lg:w-80 rounded-3xl overflow-hidden group"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=95"
              alt="Öncesi — bakıma muhtaç saç"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ aspectRatio: '4/5' }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }}
            />
            {/* Badge */}
            <div
              className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'rgba(255,255,255,0.90)',
                color: '#7A6A63',
                backdropFilter: 'blur(8px)',
              }}
            >
              Önce
            </div>
            {/* Label at bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Bakıma muhtaç, yıpranmış saç
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex lg:flex-col items-center justify-center px-6 lg:px-8 z-10">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #B9816F, #D4A092)',
                boxShadow: '0 8px 24px rgba(185,129,111,0.35)',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden lg:block"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lg:hidden"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <p
              className="mt-2 text-xs text-center hidden lg:block"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              Dönüşüm
            </p>
          </div>

          {/* After Card */}
          <div
            className="relative w-full lg:w-80 rounded-3xl overflow-hidden group"
            style={{
              boxShadow: '0 20px 60px rgba(185,129,111,0.25)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=95"
              alt="Sonrası — lüks saç tasarımı"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ aspectRatio: '4/5' }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(185,129,111,0.40) 0%, transparent 60%)' }}
            />
            {/* Badge */}
            <div
              className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(135deg, #B9816F, #D4A092)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Sonra
            </div>
            {/* Label at bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Işıltılı, profesyonel tasarım
              </p>
            </div>
          </div>
        </div>

        {/* Description below */}
        <div className="text-center mt-12">
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto mb-6"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Yılların deneyimi ve premium ürünlerle, her saç tipine uygun dönüşümler
            gerçekleştiriyoruz. Sonuçlarımız, müşterilerimizin gülüşlerinde görünür.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
          >
            Siz de dönüşümünüzü yaşayın
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
