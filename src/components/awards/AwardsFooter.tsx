const LINKS = ['Hizmetler', 'Galeri', 'Hikayemiz', 'İletişim']

export default function AwardsFooter() {
  return (
    <footer style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.75rem', letterSpacing: '-0.5px' }}>
              HÜLYA
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.38)', fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 3 }}>
              Hair &amp; Beauty Studio
            </p>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.90)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.42)')}
              >
                {l}
              </a>
            ))}
          </nav>

          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>
            &copy; 2024 HÜLYA Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
