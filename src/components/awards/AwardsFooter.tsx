import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri',    href: '#galeri'    },
  { label: 'Hikayemiz', href: '#hikayemiz' },
  { label: 'İletişim',  href: '#iletisim'  },
]

export default function AwardsFooter({ onOpenKVKK }: { onOpenKVKK: () => void }) {
  return (
    <>
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
            <Link
              to="/tokat-kuafor"
              className="text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.65)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,143,122,1)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.65)')}
            >
              Tokat Kuaför
            </Link>
            <Link
              to="/tokat-gelin-saci"
              className="text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.65)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,143,122,1)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.65)')}
            >
              Gelin Saçı
            </Link>
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
            <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', lineHeight: 1.7, textAlign: 'right' }}>
              <p>Pzt – Cmt &nbsp;09:00 – 19:00</p>
              <p>Turhal, Tokat</p>
            </div>
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
            2005&apos;ten beri Turhal&apos;ın kuaför ve güzellik adresi
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

    {/* Web site kredisi bandı */}
    <div
      className="flex items-center justify-center px-6 py-3"
      style={{ background: '#1A1210', borderTop: '1px solid rgba(248,245,242,0.04)' }}
    >
      <a
        href="https://wa.me/905380590173?text=Merhaba%2C%20web%20sitesi%20yapt%C4%B1rmak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-opacity hover:opacity-80"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#C98F7A">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.35)', fontSize: '0.65rem', letterSpacing: '0.06em' }}>
          Bu siteyi siz de yaptırın
        </span>
      </a>
    </div>
    </>
  )
}
