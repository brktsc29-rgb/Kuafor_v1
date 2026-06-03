const PARTICLES: {
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  cls: string
  dur: string
  delay: string
}[] = [
  { top: '14%', left: '6%',   size: 4, cls: 'hero-particle-a', dur: '13s', delay: '0s' },
  { top: '38%', left: '2%',   size: 3, cls: 'hero-particle-b', dur: '17s', delay: '2s' },
  { top: '62%', left: '9%',   size: 5, cls: 'hero-particle-c', dur: '15s', delay: '4s' },
  { top: '82%', left: '4%',   size: 3, cls: 'hero-particle-a', dur: '19s', delay: '1s' },
  { top: '22%', right: '6%',  size: 4, cls: 'hero-particle-b', dur: '14s', delay: '3s' },
  { top: '50%', right: '3%',  size: 3, cls: 'hero-particle-c', dur: '16s', delay: '5s' },
  { top: '74%', right: '8%',  size: 5, cls: 'hero-particle-a', dur: '20s', delay: '2s' },
  { top: '8%',  left: '42%',  size: 3, cls: 'hero-particle-b', dur: '12s', delay: '6s' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(140deg, #FFF8F5 0%, #F8E9E3 40%, #F2D9CF 70%, #FFF8F5 100%)',
      }}
    >
      {/* ── LAYER 2 · Three slow floating radial glows ── */}
      <div
        className="hero-blob-1 absolute pointer-events-none"
        style={{
          top: '-15%',
          left: '-10%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,220,200,0.22) 0%, rgba(248,233,227,0.10) 50%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="hero-blob-2 absolute pointer-events-none"
        style={{
          bottom: '-20%',
          right: '-12%',
          width: '760px',
          height: '760px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(185,129,111,0.18) 0%, rgba(234,197,182,0.09) 50%, transparent 70%)',
          filter: 'blur(150px)',
        }}
      />
      <div
        className="hero-blob-3 absolute pointer-events-none"
        style={{
          top: '20%',
          right: '20%',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(242,217,207,0.20) 0%, rgba(255,248,245,0.08) 55%, transparent 70%)',
          filter: 'blur(130px)',
        }}
      />

      {/* ── LAYER 3 · Flowing light ribbons ── */}
      <div className="hero-ribbon absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="r1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#B9816F" stopOpacity="0" />
              <stop offset="30%"  stopColor="#B9816F" stopOpacity="1" />
              <stop offset="70%"  stopColor="#D4A090" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4A090" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="r2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#C89880" stopOpacity="0" />
              <stop offset="40%"  stopColor="#C89880" stopOpacity="0.8" />
              <stop offset="60%"  stopColor="#B9816F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B9816F" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" strokeLinecap="round">
            <path stroke="url(#r1)" strokeWidth="1.4"
              d="M-120,160 C180,30 400,320 660,140 S980,360 1300,180 S1520,60 1620,200" />
            <path stroke="url(#r2)" strokeWidth="0.9"
              d="M-80,300 C160,160 380,440 640,270 S940,490 1240,310 S1460,190 1580,340" />
            <path stroke="url(#r1)" strokeWidth="1.1"
              d="M0,460 C200,320 440,560 700,400 S1020,620 1280,460 S1460,340 1580,460" />
            <path stroke="url(#r2)" strokeWidth="0.75"
              d="M-60,600 C180,480 380,700 640,550 S940,760 1220,600 S1440,500 1560,620" />
            <path stroke="url(#r1)" strokeWidth="0.85"
              d="M40,80 C260,-50 500,220 760,50 S1080,280 1340,100 S1520,-20 1640,100" />
          </g>
        </svg>
      </div>

      <div className="hero-ribbon-alt absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" strokeLinecap="round">
            <path stroke="#B9816F" strokeWidth="1.2"
              d="M-100,720 C200,580 460,820 720,680 S1040,900 1300,740 S1480,640 1600,740" />
            <path stroke="#D4A090" strokeWidth="0.8"
              d="M100,240 C340,110 600,400 860,220 S1160,440 1420,260" />
          </g>
        </svg>
      </div>

      {/* ── LAYER 4 · Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none ${p.cls}`}
          style={{
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #B9816F 0%, rgba(185,129,111,0.3) 100%)',
            filter: `blur(${p.size > 3 ? 1.5 : 0.8}px)`,
            ['--dur' as string]: p.dur,
            ['--delay' as string]: p.delay,
          }}
        />
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT · Text column */}
          <div className="relative">
            {/* LAYER 6 · Subtle glass blur behind text */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                background: 'rgba(255,248,245,0.20)',
              }}
            />

            <div className="relative">
              <p
                className="hero-fade-up text-xs uppercase tracking-[0.26em] mb-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#B9816F',
                  animationDelay: '0.10s',
                }}
              >
                GÜZELLİĞİNİZE DEĞER KATIYORUZ
              </p>

              <h1
                className="hero-fade-up text-4xl sm:text-5xl lg:text-7xl mb-4 leading-[1.0]"
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  color: '#1F1A17',
                  animationDelay: '0.28s',
                }}
              >
                Saçınızın En<br />
                <em style={{ fontStyle: 'italic', color: '#B9816F' }}>Zarif Hali</em>{' '}
                İçin
              </h1>

              <p
                className="hero-fade-up text-base mb-3"
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  color: '#7A6A63',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  animationDelay: '0.44s',
                }}
              >
                Profesyonel Dokunuş
              </p>

              <p
                className="hero-fade-up text-sm leading-relaxed mb-8 max-w-md"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#7A6A63',
                  animationDelay: '0.56s',
                }}
              >
                Modern kesim, profesyonel renklendirme, bakım ve özel gün
                saç tasarımlarıyla kendinizi yeniden keşfedin.
                Her ziyarette lüksü hissedin.
              </p>

              <div
                className="hero-fade-up flex flex-col sm:flex-row gap-3 mb-10"
                style={{ animationDelay: '0.68s' }}
              >
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ fontFamily: 'Inter, sans-serif', background: '#25D366' }}
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
              <div
                className="hero-fade-up flex flex-wrap gap-6"
                style={{ animationDelay: '0.82s' }}
              >
                {[
                  { icon: '⭐', value: '4.9 / 5',   label: 'Müşteri Memnuniyeti' },
                  { icon: '👩', value: '10.000+',    label: 'Mutlu Müşteri' },
                  { icon: '📍', value: 'İstanbul',   label: 'Bağcılar' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && (
                      <div className="w-px self-stretch mr-2" style={{ background: '#E9D6CE' }} />
                    )}
                    <span className="text-base">{stat.icon}</span>
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#1F1A17' }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT · Portrait */}
          <div
            className="hero-fade-up relative flex justify-center lg:justify-end"
            style={{ animationDelay: '0.20s' }}
          >
            <div className="relative">
              {/* Ambient glow behind portrait */}
              <div
                className="absolute -inset-8 rounded-[44px] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(185,129,111,0.18) 0%, transparent 70%)',
                  filter: 'blur(24px)',
                }}
              />

              {/* LAYER 5 · Portrait with slow scale */}
              <div
                className="relative z-10 overflow-hidden"
                style={{ borderRadius: '36px' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=95"
                  alt="Lüks saç tasarımı"
                  className="hero-portrait-anim w-full max-w-[480px] object-cover block"
                  style={{
                    aspectRatio: '3/4',
                    boxShadow:
                      '0 40px 80px rgba(31,26,23,0.18), 0 0 0 1px rgba(233,214,206,0.35)',
                  }}
                />
                {/* Soft inner vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: '36px',
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(31,26,23,0.08) 100%)',
                  }}
                />
              </div>

              {/* Floating rating card */}
              <div
                className="hero-fade-up absolute bottom-8 left-0 sm:-left-6 lg:-left-8 z-20 px-4 py-3 flex items-center gap-3"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  background: 'rgba(255,255,255,0.90)',
                  border: '1px solid rgba(233,214,206,0.65)',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(185,129,111,0.18)',
                  animationDelay: '0.9s',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #B9816F, #D4A090)' }}
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
