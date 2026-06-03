import { useEffect, useRef, useState, FormEvent } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const WHATSAPP_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const SERVICES = [
  'Saç Kesimi', 'Ombre & Balayage', 'Röfle', 'Keratin Bakım',
  'Gelin Saçı', 'Makyaj', 'Saç Boyama', 'Diğer',
]

const inputStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.85rem',
  color: '#2A211D',
  background: 'rgba(255,255,255,0.70)',
  border: '1px solid rgba(42,33,29,0.14)',
  borderRadius: 12,
  padding: '13px 16px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function AwardsCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLHeadingElement>(null)
  const [form, setForm]       = useState({ name: '', service: '', note: '' })
  const [sent, setSent]       = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const lines = headRef.current?.querySelectorAll('.cta-line')
      if (lines) {
        gsap.fromTo(lines, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 78%' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `Merhaba, randevu almak istiyorum.%0AAd: ${encodeURIComponent(form.name)}%0AHizmet: ${encodeURIComponent(form.service || 'Belirtilmedi')}%0ANot: ${encodeURIComponent(form.note || '-')}`
    window.open(`https://wa.me/905001234567?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', service: '', note: '' })
  }

  return (
    <section
      ref={sectionRef}
      id="iletisim"
      className="relative py-20 md:py-36 px-6 md:px-14 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F3ECE7 0%, #EFE5DF 50%, #F3ECE7 100%)', borderTop: '1px solid rgba(42,33,29,0.10)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(201,143,122,0.18) 0%, transparent 65%)' }}
      />

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}
        >
          Randevu Al
        </motion.p>

        <h2
          ref={headRef}
          style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(3rem, 9vw, 11rem)', lineHeight: 0.9, letterSpacing: '-1.5px', marginBottom: 44 }}
        >
          <div className="cta-line" style={{ overflow: 'hidden', opacity: 0 }}>
            <span style={{ display: 'block' }}>Güzelliğiniz</span>
          </div>
          <div className="cta-line" style={{ overflow: 'hidden', opacity: 0 }}>
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Bizi Bekliyor</em>
          </div>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 48px' }}
        >
          Profesyonel ekibimizle tanışın, size özel bakım planınızı birlikte oluşturalım.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
            style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5' }}
            whileHover={{ scale: 1.06, background: '#C9917F' } as never}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {WHATSAPP_SVG}
            WhatsApp&apos;tan Randevu Al
          </motion.a>

          <motion.a
            href="tel:+905001234567"
            className="flex items-center gap-2 rounded-full px-8 py-4 text-[0.82rem]"
            style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A' }}
            whileHover={{ borderColor: '#B9816F', scale: 1.06 } as never}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            +90 500 123 45 67
          </motion.a>

          <motion.a
            href="https://www.instagram.com/hulyaakuafor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem]"
            style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A' }}
            whileHover={{ borderColor: '#B9816F', scale: 1.06 } as never}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </motion.a>
        </motion.div>

        {/* ── Contact Form ── */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-full max-w-lg mx-auto mt-14 text-left"
        >
          <div
            className="p-6 md:p-8"
            style={{ background: 'rgba(255,255,255,0.55)', borderRadius: 20, border: '1px solid rgba(42,33,29,0.10)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(42,33,29,0.07)' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 20 }}>
              Hızlı Randevu Formu
            </p>

            <div className="flex flex-col gap-3">
              <input
                required
                type="text"
                placeholder="Adınız"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = '#C98F7A')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(42,33,29,0.14)')}
              />

              <select
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                style={{ ...inputStyle, color: form.service ? '#2A211D' : 'rgba(42,33,29,0.40)' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#C98F7A')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(42,33,29,0.14)')}
              >
                <option value="" disabled>Hizmet Seçin</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <textarea
                rows={3}
                placeholder="Notunuz (isteğe bağlı)"
                value={form.note}
                onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#C98F7A')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(42,33,29,0.14)')}
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center gap-3 rounded-full py-4 text-[0.82rem] font-medium transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif', background: sent ? '#7A9E7E' : '#C98F7A', color: '#FFF8F5', border: 'none', cursor: 'pointer' }}
            >
              {sent ? (
                '✓ WhatsApp Açılıyor...'
              ) : (
                <>{WHATSAPP_SVG} WhatsApp ile Gönder</>
              )}
            </button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 mb-10"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.40)', fontSize: '0.72rem', letterSpacing: '0.08em' }}
        >
          Turhal, Tokat &mdash; 2005&apos;ten beri hizmetinizdeyiz
        </motion.p>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="w-full max-w-2xl mx-auto overflow-hidden"
          style={{ borderRadius: 20, border: '1px solid rgba(42,33,29,0.10)', boxShadow: '0 8px 32px rgba(42,33,29,0.08)' }}
        >
          <iframe
            title="HÜLYA Studio Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.999600145139!2d36.08035847639812!3d40.386701471444475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407ded8ffd05f5e9%3A0x3bc7ace5c8e629d2!2zSMO8bHlhIEt1YWbDtnI!5e0!3m2!1str!2str!4v1780525279040!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
