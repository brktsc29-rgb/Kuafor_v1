import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  onOpenKVKK: () => void
}

export default function CookieBanner({ onOpenKVKK }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('hulya_cookie_consent')) {
      const t = setTimeout(() => setVisible(true), 1800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('hulya_cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('hulya_cookie_consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-5 left-1/2 z-[9999] w-[calc(100%-40px)] max-w-xl"
          style={{ transform: 'translateX(-50%)' }}
        >
          <div
            className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              background: '#2A211D',
              borderRadius: 18,
              boxShadow: '0 16px 48px rgba(0,0,0,0.30)',
              border: '1px solid rgba(201,143,122,0.15)',
            }}
          >
            <div className="flex-1">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#F8F5F2', fontSize: '0.78rem', lineHeight: 1.6 }}>
                Sitemizde harita ve sosyal medya bağlantıları için çerezler kullanılmaktadır.{' '}
                <button
                  onClick={onOpenKVKK}
                  style={{ color: '#C98F7A', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}
                >
                  Gizlilik Politikası
                </button>
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 rounded-full text-[0.72rem]"
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.45)', border: '1px solid rgba(248,245,242,0.12)', background: 'none', cursor: 'pointer' }}
              >
                Reddet
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-full text-[0.72rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', border: 'none', cursor: 'pointer' }}
              >
                Kabul Et
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
