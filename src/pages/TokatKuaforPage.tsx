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
  { title: 'Gelin Saçı',                    desc: 'Düğün günü için kişiye özel saç tasarımı; stil önceden WhatsApp ile netleştiriliyor.' },
  { title: 'Ombre & Balayage',               desc: 'Saç yapısına göre yumuşak renk geçişleri ve doğal görünüm.'                   },
  { title: 'Röfle',                          desc: 'İnce folyo tekniğiyle parlaklık ve derinlik katan renklendirme.'               },
  { title: 'Saç Boyama',                     desc: 'Tek renk veya çok renkli boyama uygulamaları, saç sağlığı korunarak.'         },
  { title: 'Saç Kesimi',                     desc: 'Yüz hatlarına ve günlük yaşama uygun kesim ve şekillendirme.'                 },
  { title: 'Profesyonel Saç Tasarımı',       desc: 'Nişan, mezuniyet, kına ve özel etkinlikler için kalıcı stil.'                 },
  { title: 'Özel Gün Saç Tasarımı',          desc: 'Saatlerce bozulmadan duracak şekilde ürün ve teknik seçimiyle tasarım.'       },
  { title: 'Saç Bakımı ve Fön',              desc: 'Keratin bakım, nem tedavisi ve günlük fön uygulamaları.'                      },
]

const FAQS = [
  {
    q: 'Tokat Merkez veya diğer ilçelerden ulaşım nasıl?',
    a: 'Tokat Merkez\'den Turhal yaklaşık 50 km, D100 karayolu üzerinden 45–50 dakika. Zile\'den yaklaşık 21 km / 23 dakika, Erbaa\'dan 55 km, Niksar\'dan 60 km. Turhal\'a düzenli minibüs ve otobüs seferleri de var.',
  },
  {
    q: 'Randevu almak için ne yapmalıyım?',
    a: 'WhatsApp veya telefon yeterli. Hangi hizmeti istediğinizi ve tarih tercihlerinizi bildirin. Özellikle yoğun dönemlerde önceden yazmak, istediğiniz tarihi almanızı kolaylaştırır.',
  },
  {
    q: 'Gelin saçı için ne kadar önceden randevu almalıyım?',
    a: 'Bahar ve yaz düğünleri için tarihler aylarca önceden dolabiliyor. Nisan\'dan eylül\'e kadar olan dönemde erken planlamak önemli. Randevu almadan önce WhatsApp\'tan düğün tarihinizi ve istediğiniz stili bildirmeniz yeterli.',
  },
  {
    q: 'Fiyat hakkında bilgi alabilir miyim?',
    a: 'Hizmetlere ve saçın mevcut durumuna göre değiştiği için sabit fiyat listesi yayınlamıyoruz. WhatsApp üzerinden hizmet türünü ve saç durumunuzu yazarsanız yaklaşık bilgi verebiliriz.',
  },
  {
    q: 'Park yeri var mı?',
    a: 'Salonun yakınında park yeri mevcut.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(42,33,29,0.10)' }}>
      <button
        onClick={() => setOpen(o => !o)}
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

export default function TokatKuaforPage() {
  const [kvkkOpen, setKvkkOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Tokat Kuaför | Hülya Kuaför Gelin Saçı, Ombre ve Saç Tasarımı</title>
        <meta name="description" content="Tokat'ta gelin saçı, ombre, röfle, saç boyama ve profesyonel saç tasarımı hizmetleri. Hülya Kuaför, Turhal'daki salonunda Tokat merkez ve çevre ilçelerden gelen misafirlerini ağırlamaktadır." />
        <link rel="canonical" href="https://www.hulyastudio.com/tokat-kuafor" />
        <meta property="og:title" content="Tokat Kuaför | Hülya Kuaför Gelin Saçı, Ombre ve Saç Tasarımı" />
        <meta property="og:description" content="Tokat'ta gelin saçı, ombre, röfle ve profesyonel saç tasarımı. Turhal'daki Hülya Kuaför, Tokat merkez ve çevre ilçelerden gelen misafirlerini ağırlamaktadır." />
        <meta property="og:image" content="https://www.hulyastudio.com/images/hulya-kuafor-turhal-hero.webp" />
        <meta property="og:url" content="https://www.hulyastudio.com/tokat-kuafor" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.hulyastudio.com/' },
            { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://www.hulyastudio.com/tokat-kuafor' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HairSalon',
          name: 'Hülya Kuaför',
          alternateName: 'HÜLYA Hair & Beauty Studio',
          url: 'https://www.hulyastudio.com/tokat-kuafor',
          telephone: '+905412757160',
          foundingDate: '2010',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Yavuz Selim Mah. Şirin Sk. No:6/B',
            addressLocality: 'Turhal',
            addressRegion: 'Tokat',
            addressCountry: 'TR',
        postalCode: '60300',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.3867,
            longitude: 36.0836,
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            opens: '08:00',
            closes: '19:00',
          }],
          areaServed: [
            { '@type': 'City', name: 'Tokat' },
            { '@type': 'City', name: 'Turhal' },
            { '@type': 'City', name: 'Zile' },
            { '@type': 'City', name: 'Erbaa' },
            { '@type': 'City', name: 'Niksar' },
            { '@type': 'City', name: 'Amasya' },
            { '@type': 'City', name: 'Merzifon' },
            { '@type': 'AdministrativeArea', name: 'Tokat Merkez' },
          ],
          sameAs: ['https://www.instagram.com/hulyaakuafor'],
          founder: { '@type': 'Person', name: 'Sibel Erturhan' },
          employee: { '@type': 'Person', name: 'Damla Erturhan' },
          knowsAbout: ['Gelin Saçı','Ombre','Balayage','Röfle','Saç Boyama','Saç Kesimi','Profesyonel Saç Tasarımı','Saç Bakımı'],
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

          <LandingNavHizmetler current="/tokat-kuafor" />
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
            data-cta-location="tokat-kuafor-nav"
            data-service-name="Tokat Kuaför"
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/hulya-kuafor-turhal-hero.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.72)',
            }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.45) 50%, rgba(8,6,4,0.15) 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(8,6,4,0.35) 0%, transparent 35%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(201,143,122,0.10) 0%, transparent 55%)' }} />

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
              Tokat Kuaför<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Hizmetleri</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.92rem', lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}
            >
              Turhal'daki salonumuzda gelin saçından ombrea, röfleden profesyonel saç tasarımına kadar Tokat'ın dört bir yanından gelen misafirlerimizi ağırlıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP}
                data-cta-location="tokat-kuafor-hero"
                data-service-name="Tokat Kuaför"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                data-cta-location="tokat-kuafor-hero"
                data-service-name="Tokat Kuaför"
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
            <li><span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.72rem' }}>Tokat Kuaför</span></li>
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
                2010'dan Bu Yana<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Turhal'dayız</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Sibel Erturhan, bu salonu kurarken büyük bir şey hedeflemiyordu; iyi iş yapmak ve her müşteriyle tek tek ilgilenmek yeterliydi. On altı yılın ardından hâlâ aynı anlayışla devam ediyoruz.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Damla Erturhan ile ikimiz bu salonu yürütüyoruz. Küçük bir ekip olmak bir kısıtlama değil, avantaj: her randevuya gerçekten zaman ayırabiliyoruz, kalabalık sıra bekletmiyoruz.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Salon Turhal'da, fiziksel olarak tek konumda. Tokat Merkez, Zile, Erbaa ve Niksar'dan gelen misafirlerimizi burada ağırlıyoruz. Başka bir şubemiz yok, hepsi aynı yer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Why Travel ── */}
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
                Neden Turhal'a Gelinir?
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-1px', maxWidth: 700 }}>
                Tokat'ın Farklı İlçelerinden<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Misafirlerimiz Geliyor</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                  Özellikle gelin saçı söz konusu olduğunda bu kararı kimse rastgele vermiyor. Düğün günü saçınız o gün çekilecek tüm fotoğraflarda duracak. Bu yüzden Tokat Merkez'den, Zile'den, Erbaa'dan ve Niksar'dan gelin adayları uzun yıllardır bize geliyor.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                  Ombre ve röfle için gelenler de var. İyi bir renklendirme uygulaması aylar boyunca güzel durur; eksik yapılan bir işlem ise çok erken bozulur. Renk tekniklerinde yılların getirdiği bir tutarlılık var burada.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                  Uzak ilçelerden gelen misafirlerimiz için baskı da farklı. Onların yolculuk ettiklerini bilmek, işi doğru yapma sorumluluğunu artırıyor. Bu iyi bir şey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                {['Tokat Merkez', 'Zile', 'Erbaa', 'Niksar', 'Turhal'].map(city => (
                  <div
                    key={city}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: '1px solid rgba(42,33,29,0.10)' }}
                  >
                    <span style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.15rem' }}>{city}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.45)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                      {city === 'Turhal' ? 'Salonumuzun konumu' : 'Misafir ağırladığımız ilçeler'}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-6"
                  style={{ background: 'rgba(255,255,255,0.65)', borderRadius: 16, border: '1px solid rgba(42,33,29,0.08)' }}
                >
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.58rem', letterSpacing: '0.22em', marginBottom: 12 }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.15rem', marginBottom: 8, lineHeight: 1.2 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.60)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gelin Saçı ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Gelin Saçı
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
                Düğün Günü<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Tek Şans</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Gelin saçı için önce WhatsApp üzerinden görüşüyoruz. Hangi stil, hangi aksesuar, saçın nasıl taşınması gerektiğini referans görsellerle birlikte paylaşıyoruz. Bazı gelinler kesin fikirle geliyor, bazıları seçeneklere bakmak istiyor; her iki durumda da başlangıç noktası aynı: saçınızı ve beklentinizi tanımak.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Düğün günü ise tasarımı uygulamak. Bu sefer biraz uzun sürebilir. Sonucun saatlerce bozulmadan durması için gerekli ürün ve teknik seçimi özenle yapılıyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Nisan–eylül arası yoğun sezon. Bu dönemde tarihler çabuk doluyor; aylarca öncesinden planlamak hem rahatlatıcı hem mantıklı.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6"
              >
                <Link
                  to="/tokat-gelin-saci"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.78rem', letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Tokat Gelin Saçı Tasarımları için tıklayın →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Ombre & Röfle ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Renklendirme
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
                Ombre, Röfle<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>ve Balayage</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Renklendirme tekniği bir kez uygulandıktan sonra sonucu değiştirmek hem zaman hem maliyet demek. Bu yüzden öncesinde doğru karar vermek önemli; bunun için saçınızı gerçekten değerlendirmek gerekiyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Ombre, saç boyunca yumuşak renk geçişi sağlar. Röfle, belirli tellere ince açık renk uygulamasıdır; doğal parlaklık için. Balayage ise fırça ile serbest uygulama, daha az düzenli ama daha organik görünüm.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Hangisinin size yakıştığını saçınızın doğal rengi, yapısı ve daha önce boyama geçmişine bakarak değerlendiriyoruz. İlk seanstan önce bu bilgileri paylaşmanızı istiyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Professional Design ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Saç Tasarımı
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
                Günlük Kesimden<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Özel Güne</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Bir kesim kötü yapılırsa, haftalarca fark edilir. Yüz hatlarına uygun, saçın kolay şekillenmesini sağlayan, sıkça salone gitmeden iyi görünmeyi sürdüren bir uzunluk. Bunlar doğru kesimden geliyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Özel günler için ise stili uzun saatler boyunca canlı tutacak ürün ve teknik seçimi yapıyoruz. Nişan, mezuniyet, kına, özel etkinlik. Stüdyodan çıkınca bozulmayacak bir tasarım için baştan doğru planlıyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Customer Experience ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Salon Deneyimi
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px', marginBottom: 28 }}>
                Kapıdan Girerken<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Ne Bekleyeceksiniz?</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Küçük bir yer. Kalabalık yok, gürültü yok. İlk soru her zaman aynı: Bugün ne yapmak istiyorsunuz?
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Özel bir gününüz varsa, o günü anlatacak birkaç dakikanız olacak. Kafanız karışıksa, seçeneklere bakmak için zaman ayrılır. Saçınızın mevcut durumuna göre neyin mümkün olduğunu da açıkça söylüyoruz. Zaman zaman "bu işlemi bu saç taşımaz" demek gerekiyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Uzak ilçelerden gelen misafirlerimiz için randevu saatine sadakat önemli. Beklettirmemeye çalışırız.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Trust ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 100%)', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Güven ve Deneyim
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-1px', maxWidth: 640 }}>
                Yirmi Yıl<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Az Değil</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Kişisel Konsültasyon', body: 'Her müşteri ayrı bir seans. Saçınızı, tercihlerinizi ve o günün beklentisini öğrenmeden işe başlamıyoruz.' },
                { title: 'Saç Sağlığı Önce',     body: 'Renklendirme ve bakım uygulamalarında saç sağlığını korumak temel öncelik. Güzel görünüm bunun üstüne kuruluyor.' },
                { title: 'Gelin Saçı Uzmanlığı', body: 'Yıllar içinde Tokat\'tan pek çok gelin adayı bu salondan geçti. Bu deneyim, bridal çalışmalarında fark yaratıyor.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6"
                  style={{ borderTop: '1px solid rgba(201,143,122,0.25)' }}
                >
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.3rem', marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.60)', fontSize: '0.85rem', lineHeight: 1.75 }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.50)', fontSize: '0.88rem', lineHeight: 1.82, maxWidth: 620 }}
            >
              Hata da yapıyoruz zaman zaman; herkes yapar. Ama önemli olan o hatayı kabul etmek ve düzeltmek. On altı yıldır süren güven bu dürüstlükten geliyor.
            </motion.p>
          </div>
        </section>

        {/* ── İlgili Hizmetler ── */}
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
                { to: '/turhal-kuafor',    label: 'Turhal Kuaför →' },
                { to: '/tokat-makyaj',     label: 'Tokat Makyaj →' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center rounded-full px-6 py-3"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.78rem', letterSpacing: '0.04em', textDecoration: 'none', border: '1px solid rgba(201,143,122,0.35)', background: 'rgba(201,143,122,0.04)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,143,122,0.10)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,143,122,0.04)' }}
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
              {FAQS.map(faq => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
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
              Önce<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Konuşalım</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 420, margin: '0 auto 40px' }}
            >
              Tokat'ın neresinden gelirseniz gelin, WhatsApp veya telefon yeterli. Hizmet ve tarih konusunda birkaç mesajla netleşebiliriz.
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
                data-cta-location="tokat-kuafor-cta"
                data-service-name="Tokat Kuaför"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                data-cta-location="tokat-kuafor-cta"
                data-service-name="Tokat Kuaför"
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
                <Link to="/tokat-gelin-saci" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Gelin Saçı</Link>
                <Link to="/turhal-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Turhal</Link>
                <Link to="/tokat-ombre" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Ombre</Link>
                <Link to="/amasya-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Amasya</Link>
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
