export default function Footer() {
  const quickLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hizmetlerimiz', href: '#hizmetler' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Fiyatlar', href: '#fiyatlar' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  const serviceList = [
    'Saç Kesimi & Fön',
    'Ombre & Sombre',
    'Röfle',
    'Keratin Bakım',
    'Gelin Saçı',
    'Profesyonel Makyaj',
  ]

  return (
    <footer style={{ background: '#1F1A17' }}>
      {/* Top rose-gold border */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #B9816F, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand Column */}
          <div>
            <div className="mb-5">
              <p
                className="text-3xl tracking-tight"
                style={{ fontFamily: 'Instrument Serif, serif', color: '#FFFFFF' }}
              >
                HÜLYA
              </p>
              <p
                className="text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
              >
                Hair &amp; Beauty Studio
              </p>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
            >
              Tokat&apos;un en prestijli güzellik deneyimi. Profesyonel ekibimiz ve
              premium ürünlerimizle sizi en güzel halinize kavuşturuyoruz.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/hulyahairbeauty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: '#7A6A63',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(185,129,111,0.15)'
                  e.currentTarget.style.color = '#B9816F'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#7A6A63'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: '#7A6A63',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.15)'
                  e.currentTarget.style.color = '#25D366'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#7A6A63'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B9816F')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#7A6A63')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3 mb-8">
              {serviceList.map((svc) => (
                <li key={svc}>
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  >
                    {svc}
                  </span>
                </li>
              ))}
            </ul>

            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F' }}
            >
              İletişim
            </h4>
            <address
              className="not-italic text-sm leading-relaxed space-y-1"
              style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
            >
              <p>Güneşli Mah. Güneşli Cad. No:42</p>
              <p>Turhal, Tokat</p>
              <a
                href="tel:+905001234567"
                className="block mt-2 transition-colors duration-200"
                style={{ color: '#7A6A63' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B9816F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#7A6A63')}
              >
                +90 500 123 45 67
              </a>
              <a
                href="mailto:info@hulyabeautystudio.com"
                className="block transition-colors duration-200"
                style={{ color: '#7A6A63' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B9816F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#7A6A63')}
              >
                info@hulyabeautystudio.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs text-center sm:text-left"
            style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33' }}
          >
            &copy; 2024 HÜLYA Hair &amp; Beauty Studio. Tüm hakları saklıdır.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33' }}
          >
            Tasarım ile yapıldı ♡
          </p>
        </div>
      </div>
    </footer>
  )
}
