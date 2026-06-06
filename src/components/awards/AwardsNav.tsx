import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri',    href: '#galeri'    },
  { label: 'Hikayemiz', href: '#hikayemiz' },
  { label: 'İletişim',  href: '#iletisim'  },
]

const LINK_COLOR_DEFAULT  = '#5A4A41'
const LINK_COLOR_SCROLLED = 'rgba(42,33,29,0.60)'
const LINK_COLOR_HOVER    = '#2A211D'

export default function AwardsNav({ ready }: { ready: boolean }) {
  const navRef      = useRef<HTMLElement>(null)
  const logoRef     = useRef<HTMLParagraphElement>(null)
  const linksRef    = useRef<(HTMLAnchorElement | null)[]>([])
  const isScrolled  = useRef(false)

  useEffect(() => {
    if (!ready) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80px',
        onEnter: () => {
          isScrolled.current = true
          gsap.to(navRef.current, {
            background: 'rgba(248,245,242,0.92)',
            backdropFilter: 'blur(24px)',
            borderBottomColor: 'rgba(42,33,29,0.08)',
            duration: 0.4,
          })
          gsap.to(logoRef.current, { color: '#2A211D', duration: 0.3 })
          gsap.to(linksRef.current.filter(Boolean), { color: LINK_COLOR_SCROLLED, duration: 0.3 })
        },
        onLeaveBack: () => {
          isScrolled.current = false
          gsap.to(navRef.current, {
            background: 'transparent',
            backdropFilter: 'blur(0px)',
            borderBottomColor: 'transparent',
            duration: 0.4,
          })
          gsap.to(logoRef.current, { color: '#FFF8F5', duration: 0.3 })
          gsap.to(linksRef.current.filter(Boolean), { color: LINK_COLOR_DEFAULT, duration: 0.3 })
        },
      })
    }, navRef)

    return () => ctx.revert()
  }, [ready])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4"
      style={{
        background: 'transparent',
        borderBottom: '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          <p ref={logoRef} style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: '1.55rem', letterSpacing: '-0.4px' }}>
            HÜLYA
          </p>
        </motion.div>

        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                ref={el => { linksRef.current[i] = el }}
                href={l.href}
                className="text-[0.68rem] tracking-[0.16em] uppercase transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif', color: LINK_COLOR_DEFAULT }}
                onMouseEnter={e => (e.currentTarget.style.color = LINK_COLOR_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.color = isScrolled.current ? LINK_COLOR_SCROLLED : LINK_COLOR_DEFAULT)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="https://www.instagram.com/hulyaakuafor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{ color: '#C98F7A', border: '1px solid rgba(201,143,122,0.35)' }}
            whileHover={{ scale: 1.1, borderColor: '#C98F7A' } as never}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://wa.me/905412757160"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2 text-[0.72rem] tracking-wide"
          style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5' }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
            Randevu Al
          </motion.a>
        </motion.div>
      </div>
    </nav>
  )
}
