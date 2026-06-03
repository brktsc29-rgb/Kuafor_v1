const LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri',    href: '#galeri'    },
  { label: 'Hikayemiz', href: '#hikayemiz' },
  { label: 'İletişim',  href: '#iletisim'  },
]

export default function AwardsFooter() {
  return (
    <footer style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

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
                key={l.href}
                href={l.href}
                className="text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.90)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.42)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>
              &copy; {new Date().getFullYear()} HÜLYA Studio
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.22)', fontSize: '0.60rem', letterSpacing: '0.08em', marginTop: 3 }}>
              Turhal, Tokat
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
          style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.18)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            2005&apos;ten beri Turhal&apos;ın güzellik adresi
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em' }}>
            Tokat · Türkiye
          </p>
        </div>
      </div>
    </footer>
  )
}
