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

        <motion.a
          href="https://wa.me/905001234567"
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
      </div>
    </nav>
  )
}
