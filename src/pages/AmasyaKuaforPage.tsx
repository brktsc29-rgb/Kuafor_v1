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
  { slug: 'gelin-saci',   label: 'Gelin Saçı',    tag: 'DÜĞÜN',   desc: 'Hollywood waves, topuz, romantik ve tesettür gelin başı tasarımları.', bg: 'linear-gradient(160deg, #1A0E08 0%, #2E1A0E 50%, #3D2010 100%)', accent: '#C98F7A', to: '/tokat-gelin-saci', img: '/images/gelin/romantik-gelin-saci.webp' },
  { slug: 'ombre',        label: 'Ombre & Röfle',  tag: 'RENK',    desc: 'Klasik ombre, sombre, röfle ve kişiye özel renk tasarımı.', bg: 'linear-gradient(160deg, #141008 0%, #221A0E 50%, #2E2214 100%)', accent: '#D4A090', to: '/tokat-ombre',       img: '/images/ombre/klasik-ombre.webp' },
  { slug: 'makyaj',       label: 'Makyaj',         tag: 'GÜZELLİK', desc: 'Gelin, nişan, gece ve fotoğraf makyajı.', bg: 'linear-gradient(160deg, #0E0C08 0%, #1A1408 50%, #241C0A 100%)', accent: '#C98F7A', to: '/tokat-makyaj',      img: '/images/makyaj/dogal-makyaj.webp' },
  { slug: 'sac-kesimi',   label: 'Saç Kesimi',     tag: 'BAKIM',   desc: 'Kişiye özel saç kesimi, fön ve bakım uygulamaları.', bg: 'linear-gradient(160deg, #180E08 0%, #281608 50%, #381E0A 100%)', accent: '#B9816F', to: '/tokat-kuafor',     img: '/images/hulya-kuafor-turhal-hero.webp' },
]

const FAQS = [
  {
    q: 'Amasya\'dan salonunuza nasıl gelinir?',
    a: 'Turhal\'daki salonumuz Amasya\'ya yaklaşık 65 km uzaklıkta, karayoluyla yaklaşık 60 dakika. Amasya\'dan Turhal\'a düzenli otobüs ve minibüs seferleri mevcut. Salonumuzun adresini WhatsApp\'tan yazarsanız yönlendiririz.',
  },
  {
    q: 'Merzifon\'dan da müşteri kabul ediyor musunuz?',
    a: 'Evet. Merzifon\'dan salonumuza mesafe yaklaşık 114 km / 90 dakika. Merzifon\'dan özellikle gelin saçı ve özel gün randevuları için misafirlerimiz geliyor. Uzaktan gelen müşterilerimizin zamanına özellikle önem veriyoruz.',
  },
  {
    q: 'Amasya\'ya yakın başka ilçelerden de gelinebilir mi?',
    a: 'Evet. Almus (Tokat) yaklaşık 80 km / 65 dk, Reşadiye yaklaşık 135 km / 100 dk, Artova yaklaşık 51 km / 60 dk uzaklıkta. Farklı ilçelerden pek çok misafirimiz randevu alarak geliyor.',
  },
  {
    q: 'Gelin saçı için ne kadar önceden randevu almalıyım?',
    a: 'Özellikle bahar ve yaz sezonu için tarihler aylarca önceden dolabiliyor. Düğün tarihinizi ve hizmet tercihlerinizi WhatsApp\'tan iletmeniz yeterli; uygun bir randevu ayarlıyoruz.',
  },
  {
    q: 'Amasya\'dan uzun yol gelene ek bir düzenleme yapılıyor mu?',
    a: 'Uzaktan gelen misafirlerimiz için randevular sabah 08:00\'den itibaren planlanabiliyor. Saç ve makyaj gibi birden fazla hizmet planlanıyorsa toplam süreyi önceden netleştirip ona göre zaman ayrıyoruz.',
  },
  {
    q: 'Tesettür gelin başı hizmeti var mı?',
    a: 'Evet. Tülbent, dantelli şal, boncuklu başlık ve taçlı örtü dahil her örtü tipine uyumlu tesettür gelin başı hizmeti sunuyoruz. Düğün günü örtünüzü getirmeniz tasarımın tam istediğiniz gibi çıkmasını sağlar.',
  },
  {
    q: 'Amasya\'dan erken sabah randevu alınabiliyor mu?',
    a: 'Evet. Salon sabah 08:00\'de açılıyor. Amasya\'dan yola çıkıp düğün günü veya özel gün hazırlığına erken başlamak isteyenler için sabah randevusu planlanabiliyor. Yolculuk süresini göz önüne alarak randevu saatini önceden netleştiriyoruz.',
  },
  {
    q: 'Ombre veya röfle için de Turhal\'a gelen müşterileriniz var mı?',
    a: 'Evet. Ombre, balayage, sombre ve röfle için Amasya ve Merzifon\'dan düzenli misafirlerimiz var. Renk çalışması öncesinde saçınızın fotoğrafını WhatsApp\'tan paylaşırsanız uygun teknik ve süreyi önceden değerlendiriyoruz.',
  },
  {
    q: 'Nişan, kına veya mezuniyet saçı için randevu alabilir miyim?',
    a: 'Evet. Nişan saçı, kına gecesi saç tasarımı, mezuniyet saçı ve özel gün updo için ayrı randevu planlanabiliyor. Bu hizmetler için de önceden WhatsApp üzerinden iletişime geçilmesi yeterli.',
  },
  {
    q: 'Salonun açık olduğu günler ve saatler?',
    a: 'Pazartesiden cumartesiye 08:00–19:00 saatleri arasında açığız. Pazar günü kapalıyız. Yavuz Selim Mah. Şirin Sk. No:6/B, Turhal / Tokat adresindeyiz.',
  },
  {
    q: 'Gelin saçı ile makyaj aynı seansta alınabiliyor mu?',
    a: 'Evet. Gelin saçı ve makyaj aynı randevuda birlikte planlanabiliyor. Takma kirpik de bu seansa eklenebilir. Toplam hizmetleri ve süreyi önceden netleştirip buna göre takvim oluşturuyoruz.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(42,33,29,0.10)' }}>
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0' }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: 1.35, flex: 1 }}>{q}</span>
        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', border: '1px solid rgba(201,143,122,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C98F7A', fontSize: '1rem', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.87rem', lineHeight: 1.82, paddingBottom: 20 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AmasyaKuaforPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.hulyastudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://www.hulyastudio.com/tokat-kuafor' },
      { '@type': 'ListItem', position: 3, name: 'Amasya Kuaför', item: 'https://www.hulyastudio.com/amasya-kuafor' },
    ],
  }

  const schemaHairSalon = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'HÜLYA Studio',
    description: 'Amasya ve Merzifon\'dan Turhal\'a gelen müşterilere profesyonel saç tasarımı, gelin saçı, ombre ve makyaj hizmetleri.',
    url: 'https://www.hulyastudio.com/amasya-kuafor',
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
    geo: { '@type': 'GeoCoordinates', latitude: 40.3868, longitude: 36.0820 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '19:00' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Amasya' },
      { '@type': 'City', name: 'Merzifon' },
      { '@type': 'City', name: 'Tokat' },
      { '@type': 'City', name: 'Turhal' },
      { '@type': 'City', name: 'Almus' },
      { '@type': 'City', name: 'Reşadiye' },
      { '@type': 'City', name: 'Artova' },
    ],
    sameAs: ['https://www.instagram.com/hulyaakuafor'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kuaför ve Güzellik Hizmetleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gelin Saçı' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ombre' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Röfle' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makyaj' } },
      ],
    },
  }

  return (
    <>
      <Helmet>
        <title>Amasya Kuaför | Gelin Saçı ve Güzellik | HÜLYA Studio Turhal</title>
        <meta name="description" content="Amasya ve Merzifon'dan Turhal'daki HÜLYA Studio'ya. Gelin saçı, ombre, röfle ve makyaj hizmetleri. 2010'dan beri profesyonel güzellik salonu. Randevu için WhatsApp." />
        <link rel="canonical" href="https://www.hulyastudio.com/amasya-kuafor" />
        <meta property="og:title" content="Amasya Kuaför | Gelin Saçı ve Güzellik | HÜLYA Studio" />
        <meta property="og:description" content="Amasya ve Merzifon'dan Turhal'daki HÜLYA Studio'ya. Gelin saçı, ombre ve makyaj. 2010'dan beri güvenilir güzellik salonu." />
        <meta property="og:url" content="https://www.hulyastudio.com/amasya-kuafor" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHairSalon)}</script>
      </Helmet>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{ height: 64, background: 'rgba(8,6,4,0.82)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(248,245,242,0.06)' }}
      >
        <Link to="/" style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.35rem', letterSpacing: '-0.3px', textDecoration: 'none' }}>
          HÜLYA
        </Link>
        <div className="flex items-center gap-5">
          <LandingNavHizmetler current="/amasya-kuafor" />
          <a
            href="https://www.instagram.com/hulyaakuafor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(248,245,242,0.60)', display: 'flex', alignItems: 'center' }}
          >{IG_SVG}</a>
          <a
            href={WHATSAPP}
            data-cta-location="amasya-kuafor-nav"
            data-service-name="Amasya Kuaför"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', fontSize: '0.65rem', letterSpacing: '0.14em', padding: '8px 16px', borderRadius: 100, textDecoration: 'none' }}
          >
            {WA_SVG} Randevu
          </a>
        </div>
      </nav>

      <div style={{ minHeight: '100svh', background: '#F8F5F2' }}>

        {/* Hero */}
        <section
          style={{ minHeight: '100svh', background: '#080604', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 0 72px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hulya-kuafor-turhal-hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center 20%', filter: 'brightness(0.45)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,6,4,0.95) 0%, rgba(8,6,4,0.4) 55%, rgba(8,6,4,0.15) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,6,4,0.55) 0%, transparent 60%)' }} />
          <div className="relative px-6 md:px-14 max-w-screen-xl mx-auto w-full">
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
              Amasya Kuaför<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Hizmetleri</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.62)', fontSize: '0.92rem', lineHeight: 1.82, maxWidth: 520, marginBottom: 36 }}
            >
              Amasya ve Merzifon'dan Turhal'daki HÜLYA Studio'ya. Gelin saçı, ombre, röfle ve makyaj için profesyonel hizmet — 2010'dan beri.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <a href={WHATSAPP} data-cta-location="amasya-kuafor-cta" data-service-name="Amasya Kuaför" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full px-6 py-3 text-[0.78rem]" style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}>{WA_SVG} WhatsApp ile Randevu</a>
              <a href={PHONE} data-cta-location="amasya-kuafor-cta" data-service-name="Amasya Kuaför" className="flex items-center gap-2 rounded-full px-6 py-3 text-[0.78rem]" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(248,245,242,0.25)', color: 'rgba(248,245,242,0.75)', textDecoration: 'none' }}>+90 (541) 275 71 60</a>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="px-6 md:px-14 py-4" style={{ background: '#F3ECE7', borderBottom: '1px solid rgba(42,33,29,0.08)' }} aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 max-w-screen-xl mx-auto" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Ana Sayfa</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><Link to="/tokat-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Tokat Kuaför</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.72rem' }}>Amasya Kuaför</span></li>
          </ol>
        </nav>

        {/* Distance cards */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.06)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-16">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>
                Hizmet Bölgesi
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.8px' }}>
                Amasya ve<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Yakın İlçeler</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginTop: 16, maxWidth: 560 }}>
                Salonumuz Turhal'da. Amasya, Merzifon ve çevre ilçelerden gelen misafirlerimizi ağırlıyoruz. Aşağıdaki mesafeler Turhal'dan yaklaşık karayolu sürüş sürelerini gösteriyor.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {[
                { city: 'Amasya',     dist: '65 km',  time: '60 dk'    },
                { city: 'Merzifon',   dist: '114 km', time: '90 dk'    },
                { city: 'Almus',      dist: '80 km',  time: '65 dk'    },
                { city: 'Artova',     dist: '51 km',  time: '60 dk'    },
                { city: 'Reşadiye',   dist: '135 km', time: '100 dk'   },
                { city: 'Zile',       dist: '21 km',  time: '23 dk'    },
                { city: 'Turhal',     dist: 'Merkez', time: 'Buradayız' },
              ].map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="p-5"
                  style={{ background: loc.city === 'Turhal' ? '#2A211D' : 'white', borderRadius: 4, border: '1px solid rgba(42,33,29,0.10)' }}
                >
                  <p style={{ fontFamily: 'Instrument Serif, serif', color: loc.city === 'Turhal' ? '#F8F5F2' : '#2A211D', fontSize: '1.05rem', marginBottom: 4 }}>{loc.city}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: loc.city === 'Turhal' ? '#C98F7A' : 'rgba(42,33,29,0.55)', fontSize: '0.72rem', letterSpacing: '0.04em' }}>{loc.dist}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: loc.city === 'Turhal' ? 'rgba(248,245,242,0.45)' : 'rgba(42,33,29,0.38)', fontSize: '0.68rem' }}>{loc.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmet tanımı */}
        <section className="py-12 md:py-16 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.06)' }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', lineHeight: 1.12, letterSpacing: '-0.3px', marginBottom: 16 }}>
                  Amasya&apos;dan Turhal Kuaföre
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.90rem', lineHeight: 1.85, marginBottom: 14 }}>
                  Amasya merkezden HÜLYA Studio&apos;ya mesafe yaklaşık 65 km, karayoluyla 60 dakika. Merzifon&apos;dan yaklaşık 114 km / 90 dakika. Gelin saçı, ombre, makyaj ve özel gün saçı için Amasya ve Merzifon&apos;dan düzenli misafirlerimiz geliyor.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.90rem', lineHeight: 1.85 }}>
                  Uzaktan gelen misafirler için sabah 08:00&apos;den itibaren erken randevu ayarlanabiliyor. Birden fazla hizmet alınacaksa (saç + makyaj + kirpik) toplam süre önceden hesaplanıp buna göre takvim oluşturuluyor.
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', lineHeight: 1.12, letterSpacing: '-0.3px', marginBottom: 16 }}>
                  Sunulan Hizmetler
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.90rem', lineHeight: 1.85, marginBottom: 14 }}>
                  Gelin saçı modelleri: Hollywood waves, klasik topuz, dağınık topuz, romantik gelin saçı, modern gelin saçı ve tesettür gelin başı. Kına gecesi ve nişan saçı tasarımları da yapılıyor.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.90rem', lineHeight: 1.85 }}>
                  Renklendirme: ombre, balayage, sombre, röfle. Bakım: keratin uygulaması. Makyaj: gelin makyajı, nişan makyajı, gece makyajı, fotoğraf makyajı. Takma kirpik gelin saçı veya makyaj seansına eklenebiliyor. Salon Pzt–Cmt 08:00–19:00 saatleri arasında açık.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-14">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>Hizmetler</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.2rem, 5vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-1px' }}>
                Ne<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Yapıyoruz?</em>
              </h2>
            </motion.div>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
              {SERVICES.map((s, i) => (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }} className="relative overflow-hidden" style={{ background: s.bg, borderRadius: 4, aspectRatio: '4/3' }}>
                  <img src={s.img} alt={`${s.label} — Hülya Kuaför Turhal`} className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover', objectPosition: '50% 30%', opacity: 0.82 }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.88) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontFamily: 'Inter, sans-serif', color: s.accent, fontSize: '0.52rem', letterSpacing: '0.32em', textTransform: 'uppercase', background: 'rgba(8,6,4,0.55)', padding: '3px 8px', borderRadius: 100 }}>{s.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.15, marginBottom: 5 }}>{s.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,245,0.58)', fontSize: '0.73rem', lineHeight: 1.5, marginBottom: 12 }}>{s.desc}</p>
                    <Link to={s.to} style={{ fontFamily: 'Inter, sans-serif', color: s.accent, fontSize: '0.68rem', letterSpacing: '0.08em', textDecoration: 'none' }}>Detaylar →</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>Hakkımızda</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.5px', marginBottom: 24 }}>
                2010'dan Bu Yana<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Turhal'dayız</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Sibel Erturhan ve Damla Erturhan tarafından yönetilen HÜLYA Studio, on altı yılı aşkın süredir Turhal'da profesyonel saç tasarımı ve güzellik hizmetleri sunuyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: 16 }}>
                Amasya ve Merzifon'dan gelen misafirlerimiz özellikle gelin saçı, ombre renklendirme ve özel gün makyajı için randevu alıyor. Her randevuya yeterli zaman ayrılıyor; kalabalık bekleme yok.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Uzaktan gelen misafirlerimizin zamanına özellikle önem veriyoruz. Randevu saatinize dakika dakika uyuyoruz.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.72)', fontSize: '0.92rem', lineHeight: 1.85, marginTop: 16 }}>
                Sunulan hizmetler: gelin saçı (Hollywood waves, topuz, romantik, tesettür gelin başı), ombre, balayage, sombre, röfle, keratin bakım, saç kesimi ve şekillendirme, nişan ve kına gecesi saçı, gelin makyajı, nişan makyajı, gece makyajı, fotoğraf makyajı ve takma kirpik. Çalışma saatleri Pzt–Cmt 08:00–19:00.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Gelin Saçı', sub: 'Hollywood waves, topuz, tesettür başı' },
                  { label: 'Ombre & Röfle', sub: 'Klasik, sombre, röfle' },
                  { label: 'Makyaj', sub: 'Gelin, nişan, gece makyajı' },
                  { label: 'Açık Saat', sub: 'Pzt–Cmt 08:00–19:00' },
                ].map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-5" style={{ background: 'white', borderRadius: 4, border: '1px solid rgba(42,33,29,0.08)' }}>
                    <p style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.05rem', marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem' }}>{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>SSS</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                Sık Sorulan<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Sorular</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
              <div>{FAQS.slice(0, 3).map((f, i) => <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}><FAQItem q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} /></motion.div>)}</div>
              <div>{FAQS.slice(3).map((f, i) => { const idx = 3 + i; return <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}><FAQItem q={f.q} a={f.a} open={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} /></motion.div> })}</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-36 px-6 md:px-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F3ECE7 0%, #EFE5DF 50%, #F3ECE7 100%)', borderTop: '1px solid rgba(42,33,29,0.10)' }}>
          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}>Randevu</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.92, letterSpacing: '-1.5px', marginBottom: 24 }}>
              Amasya'dan<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Gelin</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.78, maxWidth: 440, margin: '0 auto 40px' }}>
              WhatsApp'tan yazın, ne istediğinizi ve tarih tercihlerinizi paylaşın — size uygun randevuyu ayarlayalım.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP} data-cta-location="amasya-kuafor-cta2" data-service-name="Amasya Kuaför" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium" style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}>{WA_SVG} WhatsApp&apos;tan Randevu Al</a>
              <a href={PHONE} data-cta-location="amasya-kuafor-cta2" data-service-name="Amasya Kuaför" className="flex items-center gap-2 rounded-full px-8 py-4 text-[0.82rem]" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}>+90 (541) 275 71 60</a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }} className="mt-10" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.40)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>Turhal, Tokat &nbsp;·&nbsp; Pzt – Cmt 08:00 – 19:00</motion.p>
          </div>
        </section>

        {/* Google Maps */}
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

        {/* Footer */}
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
                <Link to="/tokat-ombre" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Ombre</Link>
                <Link to="/amasya-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Amasya</Link>
                <Link to="/tokat-makyaj" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.65)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Makyaj</Link>
              </nav>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>
                &copy; {new Date().getFullYear()} HÜLYA Studio
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5" style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}>
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

      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
    </>
  )
}
