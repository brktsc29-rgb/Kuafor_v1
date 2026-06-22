import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import KVKKModal from '../components/awards/KVKKModal'
import LandingNavHizmetler from '../components/LandingNavHizmetler'
import CookieBanner from '../components/awards/CookieBanner'

const WHATSAPP = 'https://wa.me/905412757160'
const PHONE    = 'tel:+905412757160'

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const IG_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const SERVICES = [
  { title: 'Saç Kesimi & Şekillendirme', desc: 'Yüz hatlarına uygun kesim ve günlük yaşama göre şekillendirme.' },
  { title: 'Gelin Saçı',                  desc: 'Düğün günü için kişiye özel saç tasarımı; stil WhatsApp üzerinden önceden netleştiriliyor.' },
  { title: 'Ombre & Balayage',           desc: 'Saç yapısına göre yumuşak renk geçişleri ve doğal görünüm.' },
  { title: 'Röfle',                      desc: 'İnce folyo tekniğiyle parlaklık ve derinlik katan renklendirme.' },
  { title: 'Keratin Bakım',              desc: 'Saçı besleyen, frizz\'i gideren ve uzun süre parlak tutan bakım uygulaması.' },
  { title: 'Özel Gün Saçı',             desc: 'Nişan, mezuniyet, kına ve etkinlikler için saatlerce bozulmadan duracak tasarım.' },
]

const FAQS = [
  {
    q: 'Turhal\'da park yeri var mı?',
    a: 'Salonun yakınında park imkânı mevcut.',
  },
  {
    q: 'Randevu almak zorunlu mu?',
    a: 'Randevu almak zorunlu değil ama önceden haber vermenizi öneririz. Özellikle gelin saçı ve renklendirme işlemleri için kesinlikle önceden randevu alınmalı.',
  },
  {
    q: 'Gelin saçı hizmeti veriyor musunuz?',
    a: 'Evet, gelin saçı hizmeti sunuyoruz. Ayrıntılı bilgi için Gelin Saçı sayfamıza göz atabilirsiniz.',
  },
  {
    q: 'Diğer ilçelerden geliyorum, yol ne kadar sürer?',
    a: 'Tokat Merkez\'den D100 karayoluyla yaklaşık 45–50 dakika. Zile\'den yaklaşık 21 km / 23 dk, Erbaa\'dan 55 km, Niksar\'dan 60 km.',
  },
  {
    q: 'Fiyatlar hakkında bilgi alabilir miyim?',
    a: 'Saç durumuna ve hizmet türüne göre değiştiği için sabit liste yayınlamıyoruz. WhatsApp üzerinden sorabilirsiniz.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(42,33,29,0.10)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}>
          {q}
        </span>
        <span style={{ color: '#C98F7A', fontSize: '1.2rem', marginLeft: 16, flexShrink: 0 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.88rem', lineHeight: 1.82, paddingBottom: 20 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TurhalKuaforPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Turhal Kuaför | Hülya Hair &amp; Beauty Studio</title>
        <meta name="description" content="Turhal'da bayan kuaförü ve güzellik salonu. Saç kesimi, gelin saçı, ombre, röfle ve profesyonel saç tasarımı. Pzt–Cmt 08:00–19:00." />
        <link rel="canonical" href="https://www.hulyastudio.com/turhal-kuafor" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa',    item: 'https://www.hulyastudio.com/' },
            { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://www.hulyastudio.com/tokat-kuafor' },
            { '@type': 'ListItem', position: 3, name: 'Turhal Kuaför', item: 'https://www.hulyastudio.com/turhal-kuafor' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HairSalon',
          name: 'Hülya Kuaför',
          description: 'Turhal\'da bayan kuaförü ve güzellik salonu. Saç kesimi, gelin saçı, ombre, röfle ve profesyonel saç tasarımı.',
          url: 'https://www.hulyastudio.com/turhal-kuafor',
          telephone: '+905412757160',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Turhal',
            addressRegion: 'Tokat',
            addressCountry: 'TR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.3868,
            longitude: 36.0820,
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            opens: '08:00',
            closes: '19:00',
          }],
          areaServed: [
            { '@type': 'City', name: 'Turhal' },
            { '@type': 'City', name: 'Tokat' },
          ],
          founder: { '@type': 'Person', name: 'Sibel Erturhan' },
          employee: { '@type': 'Person', name: 'Damla Erturhan' },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}</script>
      </Helmet>

      <div style={{ background: '#F8F5F2', minHeight: '100vh' }}>

        {/* ── Nav ── */}
        <header
          className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-14 py-4"
          style={{ background: 'rgba(26,18,16,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(248,245,242,0.06)' }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.4rem', letterSpacing: '-0.5px' }}>HÜLYA</p>
          </Link>

          <Link
            to="/"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.7rem', letterSpacing: '0.12em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            ← Ana Sayfa
          </Link>

          <LandingNavHizmetler current="/turhal-kuafor" />
          <a
            href="https://www.instagram.com/hulyaakuafor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(248,245,242,0.60)', display: 'flex', alignItems: 'center', lineHeight: 1 }}
          >
            {IG_SVG}
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-5 py-2"
            style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', fontSize: '0.72rem', fontWeight: 500, textDecoration: 'none' }}
          >
            {WA_SVG}
            <span className="hidden sm:inline">Randevu Al</span>
          </a>
        </header>

        {/* ── Hero ── */}
        <section
          className="relative flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 overflow-hidden"
          style={{ minHeight: '100svh' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/4E3D1939-0CFB-4C8B-8CE3-7A787126B37C.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.72)',
            }}
          />
          {/* Gradient veil bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.45) 50%, rgba(8,6,4,0.15) 100%)' }}
          />
          {/* Gradient veil top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.35) 0%, transparent 35%)' }}
          />
          {/* Rose radial accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 65% 35%, rgba(201,143,122,0.10) 0%, transparent 55%)' }}
          />

          <div className="max-w-screen-xl mx-auto w-full relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.38em', textTransform: 'uppercase', marginBottom: 20 }}
            >
              Turhal, Tokat · Est. 2010
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.8rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-1.5px', marginBottom: 28 }}
            >
              Turhal Kuaför<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Hülya Studio</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.92rem', lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}
            >
              Turhal&apos;ın merkezinde, 2010&apos;dan bu yana güzellik ve bakım hizmetleri.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.82rem]"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}
              >
                +90 (541) 275 71 60
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Breadcrumb ── */}
        <nav
          className="px-6 md:px-14 py-3"
          aria-label="Breadcrumb"
          style={{ borderBottom: '1px solid rgba(42,33,29,0.08)', background: '#F3ECE7' }}
        >
          <ol className="flex items-center gap-2 max-w-screen-xl mx-auto" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Ana Sayfa</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><Link to="/tokat-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Tokat Kuaför</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.72rem' }}>Turhal Kuaför</span></li>
          </ol>
        </nav>

        {/* ── About ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Hakkımızda
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.5px', marginBottom: 24 }}>
                Turhal&apos;daki<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Salonunuz</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                2010&apos;dan bu yana Turhal&apos;dayız. Sibel Erturhan tarafından kurulan salon, bugün Damla Erturhan ile birlikte yürütülüyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Küçük bir ekip, kişisel bir hizmet. Her randevuya zaman ayrılıyor; kalabalık bekleme yok. Kapıdan girdiğinizde adınızı biliyoruz, aceleyle değil.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Tokat&apos;ın farklı ilçelerinden misafirler geliyor ama önce Turhal&apos;ın kendi salonuyuz. Burası bizim mahallemiz, bu işi burada yaptık ve yapmaya devam ediyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Hizmetler
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-1px' }}>
                Sunduğumuz<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Hizmetler</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-7"
                  style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 100%)', borderRadius: 16, border: '1px solid rgba(201,143,122,0.12)' }}
                >
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.58rem', letterSpacing: '0.28em', marginBottom: 14 }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.2rem', marginBottom: 10, lineHeight: 1.2 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.82rem', lineHeight: 1.72 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section
          className="py-16 md:py-28 px-6 md:px-14"
          style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 100%)', borderTop: '1px solid rgba(201,143,122,0.10)' }}
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Konum & Ulaşım
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px', marginBottom: 28 }}>
                Neredeyiz?
              </h2>

              <div style={{ borderTop: '1px solid rgba(201,143,122,0.20)', paddingTop: 24 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.70)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 12 }}>
                  Turhal merkezdeyiz. Park yeri salona yakın.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.70)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 12 }}>
                  Çalışma saatleri: <span style={{ color: '#C98F7A' }}>Pzt–Cmt 08:00–19:00</span>
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.70)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                  Tokat Merkez&apos;den D100 üzerinden yaklaşık 45–50 dakika. Zile&apos;den 21 km / 23 dk, Erbaa&apos;dan 55 km, Niksar&apos;dan 60 km.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full px-8 py-5 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                className="flex items-center justify-center gap-2 rounded-full px-8 py-5 text-[0.82rem]"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}
              >
                +90 (541) 275 71 60
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Related Services ── */}
        <section className="py-14 md:py-20 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>
                Diğer Sayfalar
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.3px' }}>
                İlgili Hizmetler
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              {[
                { to: '/tokat-gelin-saci', label: 'Gelin Saçı Tasarımları →' },
                { to: '/tokat-ombre',      label: 'Tokat Ombre →' },
                { to: '/amasya-kuafor',    label: 'Amasya Kuaför →' },
                { to: '/tokat-kuafor',     label: 'Tokat Kuaför Hizmetleri →' },
                { to: '/tokat-makyaj',     label: 'Tokat Makyaj →' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center rounded-full px-6 py-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#C98F7A',
                    fontSize: '0.78rem',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    border: '1px solid rgba(201,143,122,0.35)',
                    background: 'rgba(201,143,122,0.04)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,143,122,0.10)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(201,143,122,0.04)'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Sık Sorulan Sorular
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
                Merak Ettikleriniz
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl"
              style={{ borderTop: '1px solid rgba(42,33,29,0.10)' }}
            >
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 md:py-36 px-6 md:px-14 text-center"
          style={{ background: 'linear-gradient(160deg, #F3ECE7 0%, #EFE5DF 50%, #F3ECE7 100%)', borderTop: '1px solid rgba(42,33,29,0.10)' }}
        >
          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}
            >
              Randevu Al
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.92, letterSpacing: '-1.5px', marginBottom: 32 }}
            >
              Randevu<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Alın</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 420, margin: '0 auto 40px' }}
            >
              Turhal&apos;ın merkezindeki salonumuzda sizi bekliyoruz. WhatsApp veya telefon üzerinden birkaç mesajla randevunuzu ayarlayabilirsiniz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                className="flex items-center gap-2 rounded-full px-8 py-4 text-[0.82rem]"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}
              >
                +90 (541) 275 71 60
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.40)', fontSize: '0.72rem', letterSpacing: '0.08em' }}
            >
              Turhal, Tokat &nbsp;·&nbsp; Pzt – Cmt 08:00 – 19:00
            </motion.p>
          </div>
        </section>

        {/* ── Google Maps ── */}
        <section className="py-10 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="w-full max-w-2xl mx-auto overflow-hidden" style={{ borderRadius: 20, border: '1px solid rgba(42,33,29,0.10)', boxShadow: '0 8px 32px rgba(42,33,29,0.08)' }}>
            <iframe
              title="HÜLYA Studio Turhal harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.999600145139!2d36.08035847639812!3d40.386701471444475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407ded8ffd05f5e9%3A0x3bc7ace5c8e629d2!2zSMO8bHlhIEt1YWbDtnI!5e0!3m2!1str!2str!4v1780525279040!5m2!1str!2str"
              width="100%"
              height="300"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
          <div className="max-w-screen-xl mx-auto px-6 md:px-14 pt-10 pb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.75rem', letterSpacing: '-0.5px' }}>HÜLYA</p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.38)', fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 3 }}>Hair &amp; Beauty Studio</p>
              </div>

              <nav className="flex items-center gap-6 flex-wrap justify-center">
                <Link to="/" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Ana Sayfa</Link>
                <Link to="/tokat-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Tokat Kuaför</Link>
                <Link to="/tokat-gelin-saci" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Gelin Saçı</Link>
                <Link to="/turhal-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Turhal Kuaför</Link>
                <Link to="/tokat-makyaj" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.65)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Makyaj</Link>
              </nav>

              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>
                &copy; {new Date().getFullYear()} HÜLYA Studio
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5"
              style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.18)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                2010&apos;dan beri Turhal&apos;ın kuaför ve güzellik adresi
              </p>
              <button
                onClick={() => setKvkkOpen(true)}
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Gizlilik Politikası · KVKK
              </button>
            </div>
          </div>
        </footer>

      </div>

      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
    </>
  )
}
