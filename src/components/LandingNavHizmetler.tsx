import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const SERVICES = [
  { to: '/tokat-kuafor',     label: 'Tokat Kuaför'  },
  { to: '/tokat-gelin-saci', label: 'Gelin Saçı'    },
  { to: '/turhal-kuafor',    label: 'Turhal Kuaför' },
  { to: '/tokat-ombre',      label: 'Ombre & Röfle' },
  { to: '/amasya-kuafor',    label: 'Amasya Kuaför' },
  { to: '/tokat-makyaj',     label: 'Makyaj'        },
]

export default function LandingNavHizmetler({ current }: { current: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          background: 'none',
          border: '1px solid rgba(201,143,122,0.38)',
          borderRadius: 100,
          color: 'rgba(248,245,242,0.75)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.68rem',
          letterSpacing: '0.06em',
          padding: '6px 13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          whiteSpace: 'nowrap',
        }}
      >
        Hizmetler
        <span style={{ fontSize: '0.55rem', display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              right: 0,
              minWidth: 185,
              background: 'rgba(10,8,6,0.97)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              overflow: 'hidden',
              zIndex: 200,
              boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
            }}
          >
            {SERVICES.filter(s => s.to !== current).map((s, i, arr) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '11px 16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.76rem',
                  letterSpacing: '0.04em',
                  color: 'rgba(248,245,242,0.70)',
                  textDecoration: 'none',
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(201,143,122,0.13)'
                  e.currentTarget.style.color = 'rgba(248,245,242,0.95)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'rgba(248,245,242,0.70)'
                }}
              >
                {s.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
