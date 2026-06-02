import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Fiyatlar', href: '#fiyatlar' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 shadow-md'
          : 'py-5'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        background: scrolled ? 'rgba(255,248,245,0.90)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(233,214,206,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-tight">
          <span
            className="text-2xl tracking-tight"
            style={{ fontFamily: 'Instrument Serif, serif', color: '#1F1A17' }}
          >
            HÜLYA
          </span>
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
          >
            Hair &amp; Beauty Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B9816F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#7A6A63')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#iletisim"
            className="rounded-full px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: '#B9816F',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#A06858')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#B9816F')}
          >
            Randevu Al
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ background: '#1F1A17' }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ background: '#1F1A17' }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ background: '#1F1A17' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 border-t"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(255,248,245,0.95)',
            borderColor: '#E9D6CE',
          }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium block py-1"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#7A6A63' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#iletisim"
                className="inline-block rounded-full px-6 py-2 text-sm font-medium text-white mt-2"
                style={{ fontFamily: 'Inter, sans-serif', background: '#B9816F' }}
                onClick={() => setMenuOpen(false)}
              >
                Randevu Al
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
