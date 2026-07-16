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
  {
    slug:   'gelin-makyaji',
    label:  'Gelin Makyajı',
    tag:    'ÖZEL GÜN',
    desc:   'Saatlerce bozulmayan, fotoğrafa yansıyan ve size özel ton çalışması. Cilt tipinize uygun ürün seçimiyle.',
    bg:     'linear-gradient(160deg, #1A100C 0%, #2A1812 50%, #361E16 100%)',
    accent: '#C98F7A',
    imgPos: 'center center',
  },
  {
    slug:   'nisan-makyaji',
    label:  'Nişan Makyajı',
    tag:    'NİŞAN',
    desc:   'Nişan töreninin ışıkları ve fotoğraf makinelerine dayanıklı, parlak ve zarif uygulama.',
    bg:     'linear-gradient(160deg, #180E0C 0%, #281610 50%, #321C12 100%)',
    accent: '#D4A090',
    imgPos: 'center 20%',
  },
  {
    slug:   'gece-makyaji',
    label:  'Gece Makyajı',
    tag:    'GECE',
    desc:   'Davet, mezuniyet ve özel etkinlikler için dramatik, kalıcı ve güçlü makyaj.',
    bg:     'linear-gradient(160deg, #0E0A0C 0%, #1A1016 50%, #22141C 100%)',
    accent: '#B9816F',
    imgPos: 'center center',
  },
  {
    slug:   'dogal-makyaj',
    label:  'Doğal Makyaj',
    tag:    'GÜNLÜK',
    desc:   'Ten renginizi öne çıkaran, hafif ve ferah bir görünüm. Ofis, kafe ve günlük kullanım için ideal.',
    bg:     'linear-gradient(160deg, #141008 0%, #221A0E 50%, #2C2212 100%)',
    accent: '#C98F7A',
    imgPos: 'center center',
  },
  {
    slug:   'kina-makyaji',
    label:  'Kına Makyajı',
    tag:    'KINA',
    desc:   'Kına gecesine özgü renkli, coşkulu ve kutlamaya uygun özel tasarım makyaj.',
    bg:     'linear-gradient(160deg, #1A0C08 0%, #2A1208 50%, #38180A 100%)',
    accent: '#D4A090',
    imgPos: 'center center',
  },
  {
    slug:   'fotograf-makyaji',
    label:  'Fotoğraf Makyajı',
    tag:    'PROFESYONEL',
    desc:   'Stüdyo ışığı ve kamera için optimize edilmiş, HD uyumlu ve kalıcı profesyonel makyaj.',
    bg:     'linear-gradient(160deg, #0E0E0E 0%, #1A1A1A 50%, #242424 100%)',
    accent: '#B9816F',
    imgPos: 'center 10%',
  },
  {
    slug:   'davet-makyaji',
    label:  'Davet Makyajı',
    tag:    'ETKİNLİK',
    desc:   'Mezuniyet, söz, davet ve özel geceler için şık, kalıcı ve etkinliğe uygun makyaj.',
    bg:     'linear-gradient(160deg, #14120A 0%, #221E0E 50%, #2C2810 100%)',
    accent: '#C98F7A',
    imgPos: 'center 10%',
  },
]

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Ten Analizi',
    body: 'Önce ten renginiz, cilt tipiniz ve varsa cilt sorunlarınız değerlendiriliyor. Nemlendirme ve baz hazırlığı, makyajın kalıcılığını doğrudan etkiliyor. Bu aşamayı atlamak uzun vadede makyajın bozulmasına yol açar.',
  },
  {
    n: '02',
    title: 'Ton ve Stil Belirleme',
    body: 'Etkinliğin niteliğine, gelinliğinizin veya kıyafetinizin rengine ve kişisel tercihinize göre makyaj stili belirleniyor. Doğal, dramatik, parlak veya mat — her tercih önceden konuşuluyor.',
  },
  {
    n: '03',
    title: 'Uygulama',
    body: 'Profesyonel ürünler ve fırçalarla adım adım uygulama yapılıyor. Fondöten, kontur, göz makyajı ve dudak rengi uyumlu biçimde tamamlanıyor. Gelin makyajında saç ile eş zamanlı koordinasyon sağlanıyor.',
  },
  {
    n: '04',
    title: 'Kalıcılık ve Finiş',
    body: 'Son aşamada fixing spray ve pudra ile makyaj sabitleniyor. Işık kontrolü yapılıyor, gerekli rötuşlar tamamlanıyor. Uzun süre bozulmadan kalması için katman katman uygulama esastır.',
  },
]

const FAQS = [
  {
    q: 'Tokat\'ta profesyonel makyaj hizmeti veriyor musunuz?',
    a: 'Evet. HÜLYA Studio Turhal\'da gelin makyajı, nişan makyajı, gece makyajı ve fotoğraf makyajı dahil profesyonel makyaj hizmeti sunuyor. Tokat Merkez\'den yaklaşık 50 dakika mesafede.',
  },
  {
    q: 'Gelin makyajı için deneme seansı yapılıyor mu?',
    a: 'Hayır, ayrı bir deneme seansı yapılmıyor. Bunun yerine düğün günü öncesinde WhatsApp üzerinden referans görsel paylaşarak tonu ve stili netleştiriyoruz. Düğün sabahı hazırlığa başlamadan önce de kısa bir konsültasyon yapılıyor.',
  },
  {
    q: 'Makyaj ne kadar sürer?',
    a: 'Günlük makyaj 45 ile 60 dakika, gelin ve özel gün makyajları 60 ile 90 dakika arasında tamamlanıyor. Saç ve makyaj birlikte yapılacaksa toplam süre için önceden randevu almanızı öneririz.',
  },
  {
    q: 'Hangi markalar kullanıyorsunuz?',
    a: 'Hizmet türüne ve cilt ihtiyacına göre farklı profesyonel markalar kullanıyoruz. Portföyümüzde Dior, Misha, Natasha Denona, KIKO, Huda Beauty, Rare Beauty, Benefit Cosmetics, NARS, Sephora Collection, Too Faced, Estée Lauder, Kryolan, Joïa, ZFC, Maybelline, Flormar, NYX ve Fenty Beauty yer alıyor. Hassas cilt için hipoalerjenik alternatifler de mevcut.',
  },
  {
    q: 'Saç ve makyajı birlikte yaptırabilir miyim?',
    a: 'Evet. Gelin saçı ve gelin makyajını aynı gün, koordineli biçimde yapıyoruz. Paket rezervasyonu için WhatsApp\'tan iletişime geçmenizi öneririz.',
  },
  {
    q: 'Makyaj tüm gün bozulmadan kalır mı?',
    a: 'Doğru baz hazırlığı, kaliteli ürün seçimi ve fixing uygulamasıyla gelin makyajı 10 ile 12 saat bozulmadan kalıyor. Yağlı ciltler için ek mat ürünler kullanıyoruz.',
  },
  {
    q: 'Randevu almadan gelebilir miyim?',
    a: 'Özellikle özel gün makyajları için kesinlikle önceden randevu almanızı tavsiye ederiz. Günlük makyaj için müsaitlik durumuna göre randevusuz da hizmet verebiliyoruz.',
  },
  {
    q: 'Fiyatlar hakkında bilgi alabilir miyim?',
    a: 'Makyaj türüne ve ek hizmetlere (saç, kına vb.) göre değiştiği için sabit liste yayınlamıyoruz. WhatsApp veya telefon üzerinden kolayca bilgi alabilirsiniz.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(248,245,242,0.08)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0' }}
      >
        <span style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', lineHeight: 1.4 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ color: '#C98F7A', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0, display: 'block' }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.88rem', lineHeight: 1.8, paddingBottom: 20 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TokatMakyajPage() {
  const [openFaq, setOpenFaq]   = useState<number | null>(null)
  const [kvkkOpen, setKvkkOpen] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)

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
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa',    item: 'https://www.hulyastudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Tokat Kuafor', item: 'https://www.hulyastudio.com/tokat-kuafor' },
      { '@type': 'ListItem', position: 3, name: 'Tokat Makyaj', item: 'https://www.hulyastudio.com/tokat-makyaj' },
    ],
  }

  const schemaHairSalon = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'HULYA Studio',
    description: 'Tokat\'ta profesyonel makyaj, gelin makyaji, nisan makyaji ve ozel gun makyaji hizmeti. Turhal merkezli guzellik salonu.',
    url: 'https://www.hulyastudio.com/tokat-makyaj',
    telephone: '+90-541-275-71-60',
    email: 'hulyahairbeauty@gmail.com',
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
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '08:00', closes: '17:00' },
    ],
    areaServed: ['Tokat', 'Turhal', 'Zile', 'Erbaa', 'Niksar', 'Amasya', 'Merzifon'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Makyaj Hizmetleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gelin Makyaji' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nisan Makyaji' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gece Makyaji' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dogal Makyaj' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kina Makyaji' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fotograf Makyaji' } },
      ],
    },
  }

  return (
    <>
      <Helmet>
        <title>Tokat Makyaj | Gelin Makyajı ve Profesyonel Makyaj | HÜLYA Studio Turhal</title>
        <meta name="description" content="Tokat'ta profesyonel makyaj hizmeti. Gelin makyajı, nişan, gece ve fotoğraf makyajı. Turhal'da 2010'dan beri hizmet veren HÜLYA Studio. Randevu için WhatsApp." />
        <link rel="canonical" href="https://www.hulyastudio.com/tokat-makyaj" />
        <meta property="og:title" content="Tokat Makyaj | Gelin Makyajı ve Profesyonel Makyaj | HÜLYA Studio" />
        <meta property="og:description" content="Tokat ve Turhal'da profesyonel makyaj hizmeti. Gelin, nişan, gece ve fotoğraf makyajı. 2010'dan beri güvenilir güzellik salonu." />
        <meta property="og:url" content="https://www.hulyastudio.com/tokat-makyaj" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hulyastudio.com/images/makyaj/gelin-makyaji.webp" />
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
        <div className="flex items-center gap-4">
          <LandingNavHizmetler current="/tokat-makyaj" />
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
            data-cta-location="tokat-makyaj-nav"
            data-service-name="Tokat Makyaj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#fff', fontSize: '0.68rem', letterSpacing: '0.1em', padding: '8px 16px', borderRadius: 100, textDecoration: 'none' }}
          >
            {WA_SVG}
            Randevu
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: '100svh',
          background: '#080604',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 0 72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/images/hulya-kuafor-turhal-hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            filter: 'brightness(0.45)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,6,4,0.95) 0%, rgba(8,6,4,0.4) 55%, rgba(8,6,4,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,6,4,0.55) 0%, transparent 60%)' }} />

        <div className="relative px-6 md:px-14 max-w-screen-xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 20 }}
          >
            Tokat Makyaj
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.93, letterSpacing: '-2px', marginBottom: 28 }}
          >
            Tokat'ta<br />
            Profesyonel<br />
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Makyaj</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.7)', fontSize: '0.92rem', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}
          >
            Gelin makyajından nişan ve gece makyajına, fotoğraf makyajından
            günlük uygulamalara kadar her özel ana özel dokunuş. Turhal'da 2010'dan beri.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={WHATSAPP}
              data-cta-location="tokat-makyaj-hero"
              data-service-name="Tokat Makyaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#fff', fontSize: '0.75rem', letterSpacing: '0.1em', padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}
            >
              {WA_SVG}
              Makyaj Randevusu Al
            </a>
            <a
              href={PHONE}
              data-cta-location="tokat-makyaj-hero"
              data-service-name="Tokat Makyaj"
              style={{ fontFamily: 'Inter, sans-serif', background: 'transparent', color: '#F8F5F2', fontSize: '0.75rem', letterSpacing: '0.1em', padding: '13px 26px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(248,245,242,0.22)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.22)')}
            >
              +90 (541) 275 71 60
            </a>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background: '#0E0B09', borderBottom: '1px solid rgba(248,245,242,0.06)', padding: '14px 24px' }} aria-label="Breadcrumb">
        <div className="max-w-screen-xl mx-auto">
          <ol className="flex items-center gap-2 flex-wrap" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: 'Ana Sayfa',    href: '/' },
              { label: 'Tokat Kuaför', href: '/tokat-kuafor' },
              { label: 'Tokat Makyaj', href: null },
            ].map((crumb, i, arr) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.href
                  ? <Link to={crumb.href} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.45)', fontSize: '0.68rem', letterSpacing: '0.1em', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.8)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.45)')}
                    >{crumb.label}</Link>
                  : <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.68rem', letterSpacing: '0.1em' }}>{crumb.label}</span>
                }
                {i < arr.length - 1 && <span style={{ color: 'rgba(248,245,242,0.2)', fontSize: '0.7rem' }}>›</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* About */}
      <section style={{ background: '#0E0B09', padding: 'clamp(48px, 8vw, 96px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 16 }}>
                Tokat ve Turhal'da Makyaj
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 4.5vw, 4rem)', lineHeight: 1, letterSpacing: '-1px', marginBottom: 28 }}>
                Her Özel Ana<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Özel Makyaj</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                Makyaj, kendinizi en iyi hissettiğiniz ana ait bir yatırımdır. Yanlış ton seçimi,
                kötü baz hazırlığı veya kalitesiz ürün kullanımı saatler içinde görünür hale gelir.
                Profesyonel uygulama ile bu farkı her özel günde yaşarsınız.
              </p>
            </div>
            <div className="space-y-6">
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                HÜLYA Studio'da makyaj uygulamaları, cilt tipinize ve etkinliğin niteliğine göre
                kişiselleştiriliyor. Gelin makyajında saç tasarımıyla eş zamanlı koordinasyon
                sağlanıyor; önceden WhatsApp üzerinden stil belirlenerek düğün günü sürpriz yaşanmıyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                Tokat Merkez, Zile, Erbaa ve Niksar'dan gelen müşterilerimize kapsamlı güzellik
                hizmeti sunuyoruz. Makyaj randevunuz için WhatsApp veya telefon yeterli.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Özel Gün Makyajı', 'Ton Uyumu', 'Konsültasyon'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.62rem', letterSpacing: '0.18em', border: '1px solid rgba(248,245,242,0.12)', padding: '5px 12px', borderRadius: 100 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Artist Bio */}
      <section style={{ background: '#080604', padding: 'clamp(48px, 8vw, 96px) 24px', borderTop: '1px solid rgba(248,245,242,0.05)' }}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 overflow-hidden"
            style={{ borderRadius: 20, border: '1px solid rgba(248,245,242,0.08)' }}
          >
            {/* Photo side */}
            <div style={{ position: 'relative', minHeight: 340, overflow: 'hidden' }}>
              <img
                src="/images/makyaj/damla-erturhan.webp"
                alt="Damla Erturhan — HÜLYA Studio Uzman Makyöz"
                width={600}
                height={700}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 340 }}
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, rgba(8,6,4,0.85) 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,6,4,0.6) 0%, transparent 50%)' }} />
            </div>

            {/* Text side */}
            <div
              style={{
                background: 'linear-gradient(160deg, #1A1410 0%, #0E0B09 100%)',
                padding: 'clamp(32px, 5vw, 56px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 20,
              }}
            >
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Makyözünüz
                </p>
                <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '-0.5px', marginBottom: 4 }}>
                  Damla Erturhan
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Uzman Makyöz · HÜLYA Studio
                </p>
              </div>

              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.88rem', lineHeight: 1.85 }}>
                Damla, profesyonel makyaj eğitimini tamamladıktan sonra HÜLYA Studio bünyesinde
                uzmanlaşmış; gelin makyajı, nişan ve özel gün uygulamalarında yüzlerce müşteriye
                hizmet vermiştir.
              </p>

              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.88rem', lineHeight: 1.85 }}>
                Her yüze özel ten analizi yaparak doğru ton ve tekniği belirliyor; kalıcı baz
                hazırlığı ile makyajın saatlerce bozulmadan kalmasını sağlıyor. Gelin makyajında
                saç tasarımıyla koordineli çalışarak bütünlüklü bir görünüm sunuyor.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Gelin Makyajı', 'Ton Analizi', 'HD Makyaj', 'Kalıcı Uygulama'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.8)', fontSize: '0.62rem', letterSpacing: '0.16em', border: '1px solid rgba(201,143,122,0.25)', padding: '5px 12px', borderRadius: 100 }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={WHATSAPP}
                data-cta-location="tokat-makyaj-mid"
                data-service-name="Tokat Makyaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start mt-2"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.1em', padding: '11px 22px', borderRadius: 100, textDecoration: 'none' }}
              >
                {WA_SVG}
                Damla ile Randevu Al
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#080604', padding: 'clamp(48px, 8vw, 96px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
              Makyaj Hizmetleri
            </p>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
              Her Ortama Özel<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Makyaj Çeşitleri</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                style={{ background: s.bg, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(248,245,242,0.06)', minHeight: 200 }}
              >
                <figure
                  onClick={() => setLightbox(`/images/makyaj/${s.slug}.webp`)}
                  style={{ margin: 0, padding: 0, height: 260, overflow: 'hidden', position: 'relative', cursor: 'zoom-in' }}
                >
                  <img
                    src={`/images/makyaj/${s.slug}.webp`}
                    alt={`Tokat ${s.label} - HÜLYA Studio`}
                    width={480}
                    height={320}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.imgPos, display: 'block', transition: 'transform 0.4s ease' }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                  />
                  {/* zoom hint */}
                  <span style={{ position: 'absolute', bottom: 8, right: 10, background: 'rgba(0,0,0,0.45)', borderRadius: 100, padding: '3px 8px', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.58rem', letterSpacing: '0.08em', backdropFilter: 'blur(4px)' }}>
                    büyüt
                  </span>
                  <figcaption style={{ display: 'none' }}>{`Tokat ${s.label} uygulaması - HÜLYA Studio`}</figcaption>
                </figure>
                <div style={{ padding: '20px 22px 24px' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.15rem' }}>{s.label}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', color: s.accent, fontSize: '0.52rem', letterSpacing: '0.24em', border: `1px solid ${s.accent}44`, padding: '3px 8px', borderRadius: 100 }}>{s.tag}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.58)', fontSize: '0.8rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#0E0B09', padding: 'clamp(48px, 8vw, 96px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
              Sürecimiz
            </p>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
              Makyaj <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Adımları</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ background: 'rgba(248,245,242,0.03)', border: '1px solid rgba(248,245,242,0.07)', borderRadius: 14, padding: '28px 30px' }}
              >
                <div className="flex items-start gap-4">
                  <span style={{ fontFamily: 'Instrument Serif, serif', color: '#C98F7A', fontSize: '1.6rem', lineHeight: 1, minWidth: 36 }}>{step.n}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.1rem', marginBottom: 10 }}>{step.title}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.62)', fontSize: '0.83rem', lineHeight: 1.8 }}>{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#080604', padding: 'clamp(48px, 8vw, 96px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
                Sık Sorulan Sorular
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.5px', marginBottom: 16 }}>
                Makyaj<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Soruları</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.45)', fontSize: '0.8rem', lineHeight: 1.75 }}>
                Aklınızdaki soruların çoğu burada. Bulamadığınız varsa WhatsApp'tan yazın.
              </p>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#0E0B09', padding: 'clamp(36px, 6vw, 64px) 24px', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 16 }}>
            Diğer Hizmetler
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Tokat Gelin Saçı', to: '/tokat-gelin-saci' },
              { label: 'Tokat Ombre',      to: '/tokat-ombre'      },
              { label: 'Amasya Kuaför',    to: '/amasya-kuafor'    },
              { label: 'Turhal Kuaför',    to: '/turhal-kuafor'    },
              { label: 'Tokat Kuaför',     to: '/tokat-kuafor'     },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.6)', fontSize: '0.72rem', letterSpacing: '0.1em', border: '1px solid rgba(248,245,242,0.12)', padding: '8px 18px', borderRadius: 100, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C98F7A'; e.currentTarget.style.borderColor = 'rgba(201,143,122,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,245,242,0.6)'; e.currentTarget.style.borderColor = 'rgba(248,245,242,0.12)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg, #2A211D 0%, #1A1410 100%)', padding: 'clamp(56px, 10vw, 112px) 24px', textAlign: 'center' }}>
        <div className="max-w-xl mx-auto">
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 20 }}>
            Tokat Makyaj Randevusu
          </p>
          <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1px', marginBottom: 24 }}>
            Özel Gününüze<br />
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Hazır Olun</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.87rem', lineHeight: 1.8, marginBottom: 36 }}>
            Tokat'ın profesyonel makyaj adresi HÜLYA Studio.<br />
            Turhal, Tokat — Pzt,Çrş–Cmt 08:00–19:00 · Paz 08:00–17:00 · Sal kapalı.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP}
              data-cta-location="tokat-makyaj-cta"
              data-service-name="Tokat Makyaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.1em', padding: '14px 30px', borderRadius: 100, textDecoration: 'none' }}
            >
              {WA_SVG}
              WhatsApp ile Randevu
            </a>
            <a
              href={PHONE}
              data-cta-location="tokat-makyaj-cta"
              data-service-name="Tokat Makyaj"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F8F5F2', fontSize: '0.78rem', letterSpacing: '0.1em', padding: '14px 30px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(248,245,242,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.18)')}
            >
              +90 (541) 275 71 60
            </a>
          </div>
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
          <a
            href="https://maps.app.goo.gl/rt4Scbc17eowjUmZ6"
            target="_blank"
            rel="noopener noreferrer"
            data-cta-location="tokat-makyaj-harita"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 16px', background: '#2A211D', color: '#F8F5F2', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em', textDecoration: 'none' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Yol Tarifi Al
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)', padding: '48px 24px 32px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <div>
              <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.75rem', letterSpacing: '-0.5px' }}>HÜLYA</p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.38)', fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 3 }}>Hair & Beauty Studio</p>
            </div>
            <nav className="flex flex-wrap gap-5 items-center">
              {[
                { label: 'Ana Sayfa',     to: '/'                },
                { label: 'Tokat Kuaför',  to: '/tokat-kuafor'    },
                { label: 'Gelin Saçı',    to: '/tokat-gelin-saci'},
                { label: 'Ombre',         to: '/tokat-ombre'     },
                { label: 'Amasya',        to: '/amasya-kuafor'   },
                { label: 'Turhal Kuaför', to: '/turhal-kuafor'   },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textDecoration: 'none', textTransform: 'uppercase' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.42)')}
                >
                  {link.label}
                </Link>
              ))}
              <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Makyaj</span>
            </nav>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', lineHeight: 1.7, textAlign: 'right' }}>
                Pzt,Çrş–Cmt 08:00–19:00 · Paz 08:00–17:00<br />
                Salı kapalı<br />
                Turhal, Tokat
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.25)', fontSize: '0.62rem', marginTop: 8, textAlign: 'right' }}>
                &copy; {new Date().getFullYear()} HÜLYA Studio
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5" style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.18)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              2010'dan beri Turhal'ın kuaför ve güzellik adresi
            </p>
            <button
              onClick={() => setKvkkOpen(true)}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.55)')}
            >
              Gizlilik Politikası ve KVKK
            </button>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24, cursor: 'zoom-out',
            }}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '100%', maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 12,
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                cursor: 'default',
              }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: 20, right: 24,
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: '#fff', fontSize: '1.4rem', lineHeight: 1,
                width: 40, height: 40, borderRadius: '50%',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(6px)',
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
    </>
  )
}
