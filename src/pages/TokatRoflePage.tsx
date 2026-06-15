import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import KVKKModal from '../components/awards/KVKKModal'
import CookieBanner from '../components/awards/CookieBanner'

const WHATSAPP = 'https://wa.me/905412757160'
const PHONE    = 'tel:+905412757160'

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TECHNIQUES = [
  {
    slug:   'klasik-rofle',
    label:  'Klasik Röfle',
    tag:    'KLASİK',
    desc:   'Folyo tekniğiyle uygulanan geleneksel röfle. Saçın tamamına veya belirli bölgelerine ince dokular halinde parlaklık katar.',
    bg:     'linear-gradient(160deg, #1A1208 0%, #2A1C0A 50%, #382410 100%)',
    accent: '#C98F7A',
  },
  {
    slug:   'balayage-rofle',
    label:  'Balayage Röfle',
    tag:    'TREND',
    desc:   'Fırça ile serbest uygulama. Folyosuz, elle boyanan açık dokular. Daha doğal ve organik bir parlaklık efekti.',
    bg:     'linear-gradient(160deg, #180E08 0%, #281608 50%, #381E0A 100%)',
    accent: '#D4A090',
  },
  {
    slug:   'parcali-rofle',
    label:  'Parçalı Röfle',
    tag:    'HAFİF',
    desc:   'Sadece ön çerçeve veya üst katmana uygulanan röfle. Saçı tümüyle değiştirmeden yüze çerçeve ve ışıltı katar.',
    bg:     'linear-gradient(160deg, #141008 0%, #221A0E 50%, #2E2214 100%)',
    accent: '#B9816F',
  },
  {
    slug:   'tam-rofle',
    label:  'Tam Röfle',
    tag:    'DRAMATİK',
    desc:   'Saçın tamamına yayılmış yoğun açıklamalar. Daha dramatik, belirgin ve canlı bir görünüm için tercih edilir.',
    bg:     'linear-gradient(160deg, #180A08 0%, #2A0E08 50%, #380E08 100%)',
    accent: '#C98F7A',
  },
  {
    slug:   'platin-rofle',
    label:  'Platin Röfle',
    tag:    'CESUR',
    desc:   'Çok açık, neredeyse platin tonlara ulaşan güçlü açıklamalar. Dramatik kontrast arayanlar için.',
    bg:     'linear-gradient(160deg, #141414 0%, #1E1E1E 50%, #262626 100%)',
    accent: '#D4A090',
  },
  {
    slug:   'bakir-rofle',
    label:  'Bakır Röfle',
    tag:    'SICAK TON',
    desc:   'Bakır, bronz ve kızıl tonlarında ışıltılı açıklamalar. Koyu ve orta kahve saçlara sıcak bir ışık katar.',
    bg:     'linear-gradient(160deg, #200A06 0%, #30120A 50%, #3E180A 100%)',
    accent: '#B9816F',
  },
]

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Saç ve Renk Analizi',
    body: 'Önce mevcut saç rengi, önceki işlemler ve saç sağlığı değerlendiriliyor. Daha önce boya veya kimyasal işlem yapılmış saçlarda teknik seçimi kritik. Bu aşamada hangi röfle türünün size uygun olduğu belirleniyor.',
  },
  {
    n: '02',
    title: 'Ton ve Yoğunluk Seçimi',
    body: 'Ten renginize ve göz rengine uygun bir açıklık derecesi belirleniyor. Kaç telli folyo, hangi açıklık tonu, sıcak mı soğuk mu? Tüm detaylar konuşularak beklentinizi gerçekçi bir sonuca dönüştürüyoruz.',
  },
  {
    n: '03',
    title: 'Uygulama',
    body: 'Tekniğe göre folyo veya serbest fırça uygulaması yapılıyor. Renk, belirlenen süre bekletiliyor; süre saçın yapısına ve istenen açıklığa göre ayarlanıyor. Bu aşamada saç rengini zorlamadan hedefe ulaşmak önceliğimiz.',
  },
  {
    n: '04',
    title: 'Bakım ve Parlaklık Tonu',
    body: 'Renk işlemi sonrası toner ve bakım uygulanıyor. Saç sağlığını koruyan, uzun süre kalıcılık sağlayan protein bazlı ürünler kullanıyoruz. Sonunda parlak, sağlıklı ve canlı bir görünüm elde ediyorsunuz.',
  },
]

const CARE_TIPS = [
  'İlk 48 saat saç yıkamayın; renk saça tam oturur.',
  'Renk koruyucu şampuan ve saç maskesi kullanın.',
  'Güneşten korunmak için UV filtreli saç ürünleri tercih edin.',
  'Yüzme havuzu ve deniz suyu, rengi soluklaştırır; sonrasında mutlaka yıkayın.',
  'Röfle tazelemeleri genellikle 8 ile 12 hafta arasında yapılmalı.',
]

const FAQS = [
  {
    q: 'Tokat\'ta röfle yaptırabilir miyim?',
    a: 'Evet. HÜLYA Studio Turhal\'da profesyonel röfle hizmeti sunuyor. Tokat Merkez\'den yaklaşık 50 dakika, Zile\'den 40 dakika, Erbaa\'dan 55 dakika mesafede.',
  },
  {
    q: 'Röfle ve ombre arasındaki fark nedir?',
    a: 'Röfle, folio veya fırça tekniğiyle saçın belirli tellerine açıklık/renk uygulamasıdır. Ombre ise kökten uca bütüncül bir renk geçişidir. Röfle daha noktesel ve parlaklık odaklıyken ombre daha kapsamlı bir renk dönüşümü sağlar.',
  },
  {
    q: 'Saçlarım koyu, röfle yaptırabilir miyim?',
    a: 'Evet. Koyu saçlara röfle yapılabilir; ancak çok açık bir sonuç için birden fazla seans gerekebilir. Saçı zorlamadan, sağlığını koruyarak istenen tona adım adım ulaşıyoruz.',
  },
  {
    q: 'Röfle ne kadar sürer?',
    a: 'Uygulamanın yoğunluğuna ve saçın uzunluğuna bağlı olarak 2 ile 4 saat arasında değişir. Tam röfle ve platin tonlar daha uzun sürebilir.',
  },
  {
    q: 'Röfle sonrası saçlarım ne kadar süre boyunca canlı kalır?',
    a: 'Doğru bakım koşullarında 8 ile 12 hafta. Renk koruyucu şampuan, toner ve protein maskesi kullanımı bu süreyi belirgin biçimde uzatır.',
  },
  {
    q: 'Röfle tazelelemesi için ne zaman gelmem gerekir?',
    a: 'Genellikle 10 ila 12 haftada bir. Köklerin uzaması ve rengin solması göz önüne alındığında bu aralık yeterli. Acil bir etkinlik öncesi daha erken gelmek isterseniz WhatsApp\'tan yazabilirsiniz.',
  },
  {
    q: 'Röfle sonrası saç bakımı nasıl yapılmalı?',
    a: 'İlk 48 saat saç yıkamayın. Renk koruyucu şampuan ve saç maskesi kullanın, UV etkisine dikkat edin. Haftada bir protein maskesi uygulamak saçın uzun süre sağlıklı kalmasını sağlar.',
  },
  {
    q: 'Randevu almam gerekiyor mu?',
    a: 'Röfle işlemi zaman ve özen gerektirdiğinden randevu almanızı kesinlikle tavsiye ederiz. WhatsApp veya telefon ile kolayca randevu alabilirsiniz.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(248,245,242,0.08)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
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

export default function TokatRoflePage() {
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
      { '@type': 'ListItem', position: 3, name: 'Tokat Röfle', item: 'https://www.hulyastudio.com/tokat-rofle' },
    ],
  }

  const schemaHairSalon = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'HÜLYA Studio',
    description: 'Tokat\'ta profesyonel röfle, saç açma ve saç renklendirme hizmeti. Turhal merkezli kuaför salonu.',
    url: 'https://www.hulyastudio.com/tokat-rofle',
    telephone: '+90-541-275-71-60',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turhal',
      addressRegion: 'Tokat',
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.3868, longitude: 36.0820 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
    ],
    areaServed: ['Tokat', 'Turhal', 'Zile', 'Erbaa', 'Niksar'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Röfle Hizmetleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klasik Röfle' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balayage Röfle' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parçalı Röfle' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tam Röfle' } },
      ],
    },
  }

  return (
    <>
      <Helmet>
        <title>Tokat Röfle | Saç Açma ve Saç Renklendirme | HÜLYA Studio Turhal</title>
        <meta name="description" content="Tokat'ta profesyonel röfle, klasik ve balayage tekniklerle saç açma ve renklendirme. Turhal'da 2005'ten beri hizmet veren HÜLYA Studio. Randevu için WhatsApp." />
        <link rel="canonical" href="https://www.hulyastudio.com/tokat-rofle" />
        <meta property="og:title" content="Tokat Röfle | Saç Açma ve Saç Renklendirme | HÜLYA Studio" />
        <meta property="og:description" content="Tokat ve Turhal'da profesyonel röfle hizmeti. Klasik, balayage, parçalı ve tam röfle seçenekleri. 2005'ten beri güvenilir kuaför salonu." />
        <meta property="og:url" content="https://www.hulyastudio.com/tokat-rofle" />
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
        <div className="flex items-center gap-4">
          <Link
            to="/tokat-kuafor"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.7rem', letterSpacing: '0.1em', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.55)')}
          >
            Tokat Kuaför
          </Link>
          <a
            href={WHATSAPP}
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
            backgroundImage: 'url(/images/4E3D1939-0CFB-4C8B-8CE3-7A787126B37C.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.55)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.35) 55%, rgba(8,6,4,0.12) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,6,4,0.5) 0%, transparent 60%)' }} />

        <div className="relative px-6 md:px-14 max-w-screen-xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 20 }}
          >
            Tokat Röfle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.93, letterSpacing: '-2px', marginBottom: 28 }}
          >
            Tokat'ta<br />
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Röfle</em> ve<br />
            Saç Açma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.7)', fontSize: '0.92rem', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}
          >
            Klasik folyo röflesinden balayage tekniğine, parçalı röfleden tam röfleye kadar
            her saç tipine uygun saç renklendirme hizmetleri. Turhal'da 2005'ten beri.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#fff', fontSize: '0.75rem', letterSpacing: '0.1em', padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}
            >
              {WA_SVG}
              Röfle Randevusu Al
            </a>
            <a
              href={PHONE}
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
              { label: 'Ana Sayfa', href: '/' },
              { label: 'Tokat Kuaför', href: '/tokat-kuafor' },
              { label: 'Tokat Röfle', href: null },
            ].map((crumb, i, arr) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link to={crumb.href} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.45)', fontSize: '0.68rem', letterSpacing: '0.1em', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.8)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.45)')}
                  >{crumb.label}</Link>
                ) : (
                  <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.68rem', letterSpacing: '0.1em' }}>{crumb.label}</span>
                )}
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
                Tokat ve Turhal'da Röfle
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 4.5vw, 4rem)', lineHeight: 1, letterSpacing: '-1px', marginBottom: 28 }}>
                Saç Açma ve<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Renklendirme</em><br />
                Uzmanlığı
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                Röfle, saçın belirli teline veya tamamına folyo ya da fırça tekniğiyle açık veya
                farklı tonda renk uygulamasıdır. Doğru yapıldığında saça derinlik, boyut ve doğal
                bir ışık oyunu katar. Yanlış yapıldığında ise saçı yorabilir.
              </p>
            </div>
            <div className="space-y-6">
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                Tokat'ta saç açma veya röfle yaptırmak isteyenler için HÜLYA Studio, 2005'ten
                beri profesyonel renklendirme hizmeti sunuyor. Sibel Erturhan ve ekibimiz, her
                saç tipine özel teknik seçimiyle sonuçları kalıcı kılıyor.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                Turhal merkezli salonumuz Tokat Merkez, Zile, Erbaa ve Niksar'dan kolay
                ulaşılabilir konumda. Röfle randevusu için WhatsApp veya telefon yeterli.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['20+ Yıl Deneyim', 'Sağlıklı Röfle', 'Kişiye Özel Bakım'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.62rem', letterSpacing: '0.18em', border: '1px solid rgba(248,245,242,0.12)', padding: '5px 12px', borderRadius: 100 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Gallery */}
      <section style={{ background: '#080604', padding: 'clamp(48px, 8vw, 96px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
              Röfle Çeşitleri
            </p>
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.5px' }}>
              Her Saça Uygun<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Röfle Tekniği</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {TECHNIQUES.map((t, i) => (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                style={{ background: t.bg, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(248,245,242,0.06)', position: 'relative', minHeight: 260 }}
              >
                <figure style={{ margin: 0, padding: 0, height: 140, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={`/images/rofle/${t.slug}.webp`}
                    alt={`Tokat ${t.label} örneği - HÜLYA Studio`}
                    width={480}
                    height={320}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                  <figcaption style={{ display: 'none' }}>{`Tokat ${t.label} uygulaması - HÜLYA Studio`}</figcaption>
                </figure>
                <div style={{ padding: '20px 22px 24px' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.15rem' }}>{t.label}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', color: t.accent, fontSize: '0.52rem', letterSpacing: '0.24em', border: `1px solid ${t.accent}44`, padding: '3px 8px', borderRadius: 100 }}>{t.tag}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.58)', fontSize: '0.8rem', lineHeight: 1.7 }}>{t.desc}</p>
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
              Röfle <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Adımları</em>
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

      {/* Care Tips */}
      <section style={{ background: 'linear-gradient(135deg, #1A0E08, #2A1C12)', padding: 'clamp(40px, 7vw, 80px) 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 12 }}>
                Bakım Önerileri
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 8 }}>
                Röfleni<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Uzun Süre Koru</em>
              </h2>
            </div>
            <ul className="space-y-4">
              {CARE_TIPS.map((tip, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span style={{ color: '#C98F7A', flexShrink: 0, marginTop: 2, fontSize: '0.7rem' }}>◆</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.75)', fontSize: '0.87rem', lineHeight: 1.7 }}>{tip}</span>
                </motion.li>
              ))}
            </ul>
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
                Röfle<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Soruları</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.45)', fontSize: '0.8rem', lineHeight: 1.75 }}>
                Röfle ile ilgili aklınızdaki soruların çoğu burada. Bulamadığınız varsa WhatsApp'tan yazın.
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

      {/* Related Services */}
      <section style={{ background: '#0E0B09', padding: 'clamp(36px, 6vw, 64px) 24px', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 16 }}>
            Diğer Hizmetler
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Tokat Ombre', to: '/tokat-ombre' },
              { label: 'Tokat Gelin Saçı', to: '/tokat-gelin-saci' },
              { label: 'Turhal Kuaför', to: '/turhal-kuafor' },
              { label: 'Tokat Makyaj', to: '/tokat-makyaj' },
              { label: 'Tokat Kuaför', to: '/tokat-kuafor' },
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
            Tokat Röfle Randevusu
          </p>
          <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1px', marginBottom: 24 }}>
            Saçınıza<br />
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Işık Katın</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.87rem', lineHeight: 1.8, marginBottom: 36 }}>
            Tokat'ın en iyi röfle sonucu için HÜLYA Studio'ya gelin.<br />
            Turhal, Tokat &nbsp;·&nbsp; Pzt – Cmt 09:00 – 19:00
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP}
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
              style={{ fontFamily: 'Inter, sans-serif', color: '#F8F5F2', fontSize: '0.78rem', letterSpacing: '0.1em', padding: '14px 30px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(248,245,242,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(248,245,242,0.18)')}
            >
              +90 (541) 275 71 60
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)', padding: '48px 24px 32px' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <div>
              <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.75rem', letterSpacing: '-0.5px' }}>HÜLYA</p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.38)', fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 3 }}>Hair &amp; Beauty Studio</p>
            </div>
            <nav className="flex flex-wrap gap-5 items-center">
              {[
                { label: 'Ana Sayfa', to: '/' },
                { label: 'Tokat Kuaför', to: '/tokat-kuafor' },
                { label: 'Gelin Saçı', to: '/tokat-gelin-saci' },
                { label: 'Ombre', to: '/tokat-ombre' },
                { label: 'Turhal Kuaför', to: '/turhal-kuafor' },
                { label: 'Makyaj', to: '/tokat-makyaj' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textDecoration: 'none', textTransform: 'uppercase' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,245,242,0.42)')}
                >
                  {link.label}
                </Link>
              ))}
              <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Röfle</span>
            </nav>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', lineHeight: 1.7, textAlign: 'right' }}>
                Pzt – Cmt 09:00 – 19:00<br />
                Turhal, Tokat
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.25)', fontSize: '0.62rem', marginTop: 8, textAlign: 'right' }}>
                &copy; {new Date().getFullYear()} HÜLYA Studio
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5" style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.18)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              2005&apos;ten beri Turhal&apos;ın kuaför ve güzellik adresi
            </p>
            <button
              onClick={() => setKvkkOpen(true)}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,143,122,0.55)')}
            >
              Gizlilik Politikası · KVKK
            </button>
          </div>
        </div>
      </footer>

      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
    </>
  )
}
