const LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri',    href: '#galeri'    },
  { label: 'Hikayemiz', href: '#hikayemiz' },
  { label: 'İletişim',  href: '#iletisim'  },
]

export default function AwardsFooter({ onOpenKVKK }: { onOpenKVKK: () => void }) {
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

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://www.instagram.com/hulyaakuafor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'rgba(201,143,122,0.65)', opacity: 0.65 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.08em' }}>@hulyaakuafor</span>
            </a>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>
              &copy; {new Date().getFullYear()} HÜLYA Studio
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
          <button
            onClick={onOpenKVKK}
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.90)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.55)')}
          >
            Gizlilik Politikası · KVKK
          </button>
        </div>
      </div>
    </footer>
  )
}
