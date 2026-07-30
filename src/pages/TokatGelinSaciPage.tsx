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

const STYLES = [
  {
    slug:    'hollywood-waves',
    label:   'Hollywood Waves',
    tag:     'KLASİK',
    desc:    'Yumuşak, büyük dalgalarla sinema yıldızı zarafeti.',
    accent:  '#B9816F',
    bg:      'linear-gradient(145deg, #1A1008 0%, #2E1B10 100%)',
  },
  {
    slug:    'topuz-modelleri',
    label:   'Topuz Modelleri',
    tag:     'ŞIKLIK',
    desc:    'Yüz hatlarını çerçeveleyen, kalıcı ve simetrik topuz.',
    accent:  '#C98F7A',
    bg:      'linear-gradient(145deg, #130E0A 0%, #231510 100%)',
  },
  {
    slug:    'daginik-topuz',
    label:   'Dağınık Topuz',
    tag:     'BOHEM',
    desc:    'Doğal, özgür ve romantik bir gelin saçı alternatifi.',
    accent:  '#D4A090',
    bg:      'linear-gradient(145deg, #0F0C09 0%, #1E1510 100%)',
  },
  {
    slug:    'romantik-gelin-saci',
    label:   'Romantik Gelin Saçı',
    tag:     'ROMANTIK',
    desc:    'Kavisli bukle detaylarıyla zarif ve feminen tasarım.',
    accent:  '#B9816F',
    bg:      'linear-gradient(145deg, #18100C 0%, #2A1912 100%)',
  },
  {
    slug:    'modern-gelin-saci',
    label:   'Modern Gelin Saçı',
    tag:     'MODERN',
    desc:    'Minimalist çizgiler, clean finish ve günümüz estetigi.',
    accent:  '#C98F7A',
    bg:      'linear-gradient(145deg, #111009 0%, #201A10 100%)',
  },
  {
    slug:    'tesettur-gelin-basi',
    label:   'Tesettür Gelin Başı',
    tag:     'ÖRTÜLÜ',
    desc:    'Tülbent, şal veya boncuklu başlık uyumlu; duvak ve taç ile birlikte tasarlanan özenli tesettür başı. Örtünüzü getirmeniz yeterli — tasarımı birlikte şekillendiriyoruz.',
    accent:  '#D4A090',
    bg:      'linear-gradient(145deg, #150F0B 0%, #251A14 100%)',
  },
]

const STEPS = [
  {
    n:    '01',
    title: 'İlk Görüşme',
    body:  'WhatsApp veya telefon ile kısa bir ön konuşma yapıyoruz. Saçınızın mevcut durumunu, gelinliğinizi ve hayal ettiğiniz stili öğreniyoruz. Bu bilgiler düğün günü en doğru tasarımı oluşturmamızı sağlıyor.',
  },
  {
    n:    '02',
    title: 'Stil Belirleme',
    body:  'WhatsApp üzerinden referans fotoğraflar paylaşarak tasarımı birlikte netleştiriyoruz. Gelinliğinize, aksesuar tercihlerinize ve saç yapınıza göre en uygun stili kararlaştırıyoruz. Düğün günü uygulamaya sürprizsiz başlıyoruz.',
  },
  {
    n:    '03',
    title: 'Düğün Günü Hazırlık',
    body:  'Düğün sabahı randevu saatinizde sizi bekliyoruz. Saçınız denenmiş ve onaylanmış plan üzerinden hayata geçiriliyor. Kalıcılığı artıran ürün ve tekniklerle saçınız gün boyu bozulmadan duruyor.',
  },
  {
    n:    '04',
    title: 'Son Dokunuşlar',
    body:  'Tasarım tamamlanmadan önce her açıdan kontrol ediyoruz. Saç iğneleri, aksesuar yerleşimi ve duvak tutturma da bu aşamada yapılıyor. Salondan çıkarken her şey tam istediğiniz gibi olacak.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Gelin saçı için ne kadar önceden randevu almalıyım?',
    a: 'Bahar ve yaz düğünleri için salon takvimi aylarca önceden doluyor. Nisan–eylül döneminde düğününüz varsa en az 3 ay önceden iletişime geçmenizi öneririz. Düğün gününden önce WhatsApp üzerinden stili netleştirmek için biraz zaman ayırıyoruz.',
  },
  {
    q: 'Deneme seansı yapılıyor mu?',
    a: 'Hayır, ayrı bir deneme seansı düzenlenmüyor. Bunun yerine WhatsApp üzerinden referans fotoğraflar ve detaylı görüşme ile tasarımı önceden netleştiriyoruz. Düğün sabahı hazırlığa başlamadan önce de kısa bir konsültasyon yapılıyor; böylece sürpriz yaşanmıyor.',
  },
  {
    q: 'Saç aksesuarları ve taç kullanılabilir mi?',
    a: 'Evet. Taç, saç iğnesi, çiçek veya her türlü aksesuar düğün günü hazırlığında birlikte değerlendiriliyor. Aksesuarınızı kendi getirmenizi öneririz; böylece tasarım ona göre şekillendirilir.',
  },
  {
    q: 'Duvak takma işlemi dahil mi?',
    a: 'Evet, duvak takma ve sabitleme gelin saçı hizmetine dahil. Duvak tutturma yöntemi düğün töreni gerekliliklerine göre belirleniyor; uzun süreli kullanım için saç iğnesi ve özel teknikler kullanılıyor.',
  },
  {
    q: 'Tesettür gelin başı yapılıyor mu? Hangi örtü tipleri için tasarım yapıyorsunuz?',
    a: 'Evet. Tülbent, dantelli şal, boncuklu başlık, taçlı örtü ve pratik hazır başlık dahil her örtü tipine uyumlu tasarım yapıyoruz. Duvak ve taç ile birlikte koordineli biçimde kurgulanıyor. Gelinliğinizin yaka yapısına ve örtünün tutuş biçimine göre önerimizi şekillendiriyoruz. Düğün günü örtünüzü veya başlığınızı yanınızda getirmeniz, tasarımın tam istediğiniz gibi çıkması açısından çok yardımcı oluyor. Saçınızın fotoğrafını ve kullanacağınız örtüyü önceden WhatsApp\'tan paylaşırsanız daha detaylı yönlendirebiliriz.',
  },
  {
    q: 'Saçım kısaysa veya ince yapılıysa ne yapılabilir?',
    a: 'Kısa ya da ince saçlar için tasarım seçenekleri sınırlı değil, sadece farklı teknikler kullanılıyor. Saçınızın fotoğrafını WhatsApp\'tan gönderirseniz hangi stillerin uyacağını önceden değerlendirebiliriz. İhtiyaç halinde saç aksesuarları veya parçaların kullanımını da birlikte konuşabiliriz.',
  },
  {
    q: 'Düğün günü hazırlık ne kadar sürer?',
    a: 'Tasarımın karmaşıklığına bağlı olarak 1.5 ile 3 saat arasında değişiyor. Önceki görüşmemizde kararlaştırılan tasarıma göre tahmini süreyi belirtiyoruz. Düğün günü için yeterli zaman bırakmanızı, buna göre randevu saatini planlamanızı öneririz.',
  },
  {
    q: 'Kına gecesi veya nişan için de hizmet alabilir miyim?',
    a: 'Evet. Kına gecesi saç tasarımı, nişan saçı ve özel gün updo hizmetleri de yapılıyor. Düğün öncesi tüm etkinlikler için ayrı randevu planlanabilir.',
  },
  {
    q: 'Tokat Merkez, Zile, Erbaa, Niksar, Amasya veya Merzifon\'dan gelinlere randevu veriyor musunuz?',
    a: 'Evet. Salonumuz Turhal\'da; Tokat Merkez\'den yaklaşık 50 km (45–50 dk), Zile\'den 21 km (23 dk), Erbaa\'dan 55 km, Niksar\'dan 60 km, Amasya\'dan 65 km (60 dk), Merzifon\'dan 114 km (90 dk) uzaklıkta. Pek çok gelin adayı farklı ilçelerden salonumuza geliyor. Uzaktan gelen misafirlerimizin saatine özellikle önem veriyoruz.',
  },
  {
    q: 'Gelin saçında hangi ürünler kullanılıyor?',
    a: 'Saçın gün boyu bozulmadan durması için profesyonel düzey, saç sağlığını koruyan ürünler kullanıyoruz. Uygulanan ürünler saç tipine göre belirleniyor; hassas saçlar için daha hafif, daha yoğun fikse gereken tasarımlar için güçlendirilmiş bakım ürünleri tercih ediliyor.',
  },
  {
    q: 'Gelin saçı fiyatı nasıl belirleniyor?',
    a: 'Saçın uzunluğu ve seçilen tasarıma göre fiyat değişiyor. Sabit bir liste yayınlamıyoruz çünkü her gelin farklı. WhatsApp\'tan saç durumunuzu ve istediğiniz stili belirtirseniz yaklaşık bilgi verebiliriz.',
  },
  {
    q: 'Düğün sonrası bakım önerisinde bulunuyor musunuz?',
    a: 'Düğün günü boyunca saçın bozulmaması için hangi ürünlerin kullanıldığını paylaşıyoruz. Sonrası için saç bakım önerileri de sorarsanız memnuniyetle aktarıyoruz.',
  },
  {
    q: 'Düğün salonuna veya mekana gelip hizmet veriyor musunuz?',
    a: 'Evet, opsiyonel olarak mekana gidiş hizmeti sunuyoruz. Salonumuzda hazırlanmak yerine düğün mekanında veya evde hizmet almak tercih edilirse bunu önceden planlamak yeterli. Mekan hizmetinin müsaitliği için randevu aşamasında belirtmenizi öneririz.',
  },
  {
    q: 'Gelin ile birlikte nedime, anne veya yakınlar için de aynı gün randevu alınabiliyor mu?',
    a: 'Evet. Sayı sınırı olmaksızın aynı gün için nedime, anne veya diğer yakınlar için de randevu planlanabiliyor. Grubun tamamını kapsayan bir takvim oluşturulması için düğün tarihinden önce iletişime geçmenizi öneririz; böylece herkesin hazırlığı için yeterli süre ayrılıyor.',
  },
  {
    q: 'Takma kirpik hizmeti yapılıyor mu?',
    a: 'Evet. Takma kirpik uygulaması gelin saçı veya makyaj randevusuyla birlikte alınabiliyor. Tercihlerinizi önceden belirtirseniz hazırlık buna göre planlanıyor.',
  },
  {
    q: 'Gelin saçı ve makyaj aynı seansta birlikte alınabiliyor mu?',
    a: 'Evet. Gelin saçı ve makyaj aynı randevuda birlikte planlanabiliyor. Saç ve makyajın bütünlük içinde görünmesi için her ikisini birlikte değerlendirmenizi öneririz. Takma kirpik de bu seansa eklenebilir.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(42,33,29,0.10)' }}>
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-4 py-5"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0' }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.35, flex: 1 }}>
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 24, height: 24,
            borderRadius: '50%',
            border: '1px solid rgba(201,143,122,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#C98F7A',
            fontSize: '1rem',
            lineHeight: 1,
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
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

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.hulyastudio.com' },
    { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://www.hulyastudio.com/tokat-kuafor' },
    { '@type': 'ListItem', position: 3, name: 'Tokat Gelin Saçı', item: 'https://www.hulyastudio.com/tokat-gelin-saci' },
  ],
}

const HAIRSALON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Hülya Kuaför',
  alternateName: 'HÜLYA Hair & Beauty Studio',
  description: 'Tokat Turhal\'da gelin saçı ve özel gün saç tasarımı hizmetleri. Hollywood waves, topuz, dağınık topuz, romantik ve tesettür gelin başı.',
  url: 'https://www.hulyastudio.com/tokat-gelin-saci',
  telephone: '+905412757160',
  email: 'hulyahairbeauty@gmail.com',
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
    latitude: 40.3868,
    longitude: 36.0820,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '08:00', closes: '17:00' },
  ],
  areaServed: ['Tokat', 'Turhal', 'Zile', 'Erbaa', 'Niksar', 'Amasya', 'Merzifon', 'Tokat Merkez'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gelin Saçı Hizmetleri',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gelin Saçı Tasarımı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hollywood Waves' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Topuz Modelleri' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tesettür Gelin Başı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nişan Saçı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kına Gecesi Saç Tasarımı' } },
    ],
  },
  knowsAbout: ['gelin saçı', 'düğün saçı', 'nişan saçı', 'tesettür gelin başı', 'hollywood waves', 'topuz', 'duvak'],
  founder: { '@type': 'Person', name: 'Sibel Erturhan' },
  employee: { '@type': 'Person', name: 'Damla Erturhan' },
  priceRange: '₺₺',
  paymentAccepted: ['Cash', 'CreditCard'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '40',
    bestRating: '5',
    worstRating: '1',
  },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Gelin Saçı Randevusu Nasıl Alınır — Hülya Kuaför, Turhal',
  description: 'Tokat ve Turhal\'da gelin saçı hazırlık süreci adım adım.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'İletişime Geçin', text: 'WhatsApp veya telefon ile randevu talebi oluşturun. Düğün tarihinizi ve ilgilendiğiniz stil hakkında kısa bilgi verin.' },
    { '@type': 'HowToStep', position: 2, name: 'Stilinizi Belirleyin', text: 'Pinterest veya Instagram\'dan referans görseller seçin ve WhatsApp üzerinden paylaşın. Gelinliğinize ve aksesuar tercihlerinize göre birlikte stil kararlaştırılır.' },
    { '@type': 'HowToStep', position: 3, name: 'Randevunuzu Ayırtın', text: 'Bahar–yaz dönemi için en az 3 ay öncesinden rezervasyon yapın. Düğün günü saatinizi sabitleyin.' },
    { '@type': 'HowToStep', position: 4, name: 'Düğün Günü Hazırlık', text: 'Düğün sabahı salonumuza gelin veya ev/mekan hizmeti için önceden bildirin. Hazırlık 1,5–3 saat arasında tamamlanır.' },
    { '@type': 'HowToStep', position: 5, name: 'Son Dokunuşlar', text: 'Duvak, taç ve aksesuar yerleşimi tamamlandıktan sonra her açıdan kontrol edilir. Gün boyu bozulmadan kalması için profesyonel fikse ürünleri kullanılır.' },
  ],
}

export default function TokatGelinSaciPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Tokat Gelin Saçı | Hülya Kuaför Düğün ve Nişan Saç Tasarımı</title>
        <meta name="description" content="Tokat'ta gelin saçı ve özel gün saç tasarımı hizmetleri. Hülya Kuaför, Turhal'daki salonunda Tokat genelinden gelin adaylarını ağırlamaktadır." />
        <link rel="canonical" href="https://www.hulyastudio.com/tokat-gelin-saci" />
        <meta property="og:title" content="Tokat Gelin Saçı | Hülya Kuaför" />
        <meta property="og:description" content="Tokat'ta gelin saçı ve özel gün saç tasarımı. Hollywood waves, topuz, romantik ve tesettür gelin başı. WhatsApp ile stil görüşmesi." />
        <meta property="og:url" content="https://www.hulyastudio.com/tokat-gelin-saci" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hulyastudio.com/images/gelin/romantik-gelin-saci.webp" />
        <meta name="twitter:image" content="https://www.hulyastudio.com/images/gelin/romantik-gelin-saci.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(HAIRSALON_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(HOWTO_SCHEMA)}</script>
      </Helmet>

      <div style={{ minHeight: '100svh', background: '#F8F5F2' }}>

        {/* ── Nav ── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-14 py-4 flex items-center justify-between"
          style={{ background: 'rgba(8,6,4,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Link to="/" style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.35rem', letterSpacing: '-0.3px', textDecoration: 'none' }}>
            HÜLYA
          </Link>
          <LandingNavHizmetler current="/tokat-gelin-saci" />
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
            data-cta-location="tokat-gelin-saci-nav"
            data-service-name="Tokat Gelin Saçı"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-5 py-2 text-[0.75rem] font-medium"
            style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
          >
            {WA_SVG} Randevu Al
          </a>
        </nav>

        {/* ── Hero ── */}
        <section
          className="relative flex items-end overflow-hidden"
          style={{ height: '100svh', background: '#080604' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/images/hulya-kuafor-turhal-hero.webp"
              alt="Tokat gelin saçı tasarımı — Hülya Hair & Beauty Studio"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.72) contrast(1.08) saturate(0.95)' }}
            />
          </div>

          {/* Gradient veils */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.38) 38%, rgba(8,6,4,0.08) 65%, transparent 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(8,6,4,0.60) 0%, rgba(8,6,4,0.18) 48%, transparent 70%)' }} />

          {/* Decorative rose-gold line */}
          <div className="absolute pointer-events-none hidden md:block" style={{ right: '10%', top: '18%', width: 1, height: 120, background: 'linear-gradient(to bottom, transparent, #B9816F 40%, #B9816F 60%, transparent)', opacity: 0.4 }} />

          <div className="relative z-10 w-full px-6 md:px-14 pb-14 md:pb-20 max-w-screen-xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F', fontSize: '0.60rem', letterSpacing: '0.38em', textTransform: 'uppercase', marginBottom: 22 }}
            >
              Hülya Hair &amp; Beauty Studio · Turhal, Tokat
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(3rem, 9.5vw, 10.5rem)', lineHeight: 0.88, letterSpacing: '-2px', marginBottom: 28 }}
            >
              Tokat Gelin Saçı<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Tasarımları</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ height: 1, background: 'rgba(255,248,245,0.15)', maxWidth: 420, marginBottom: 24 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,245,0.72)', fontSize: '0.92rem', lineHeight: 1.78, maxWidth: 480, marginBottom: 36 }}
            >
              Hayalinizdeki Gelin Saçı İçin Özenli Tasarım.
              Düğün gününüzde yüz hatlarınıza, gelinlik modelinize ve tarzınıza uygun saç tasarımları.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP}
                data-cta-location="tokat-gelin-saci-hero"
                data-service-name="Tokat Gelin Saçı"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} Randevu Oluştur
              </a>
              <a
                href={PHONE}
                data-cta-location="tokat-gelin-saci-hero"
                data-service-name="Tokat Gelin Saçı"
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
            <li><span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.72rem' }}>Tokat Gelin Saçı</span></li>
          </ol>
        </nav>

        {/* ── Gallery ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.06)' }}>
          <div className="max-w-screen-xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-16"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>
                Stil Koleksiyonu
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2.2rem, 5.5vw, 6rem)', lineHeight: 0.95, letterSpacing: '-1px' }}>
                Her Geline<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Özel Bir Stil</em>
              </h2>
            </motion.div>

            {/* Gallery grid */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
            >
              {STYLES.map((s, i) => (
                <motion.figure
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="relative overflow-hidden m-0"
                  style={{
                    background: s.bg,
                    borderRadius: 4,
                    aspectRatio: i === 0 || i === 3 ? '3/4' : '4/5',
                  }}
                >
                  <img
                    src={`/images/gelin/${s.slug}.webp`}
                    alt={`Tokat ${s.label.toLowerCase()} gelin saçı — Hülya Hair & Beauty Studio Turhal`}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.88 }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.88) 0%, rgba(8,6,4,0.20) 55%, transparent 100%)' }} />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span style={{ fontFamily: 'Inter, sans-serif', color: s.accent, fontSize: '0.52rem', letterSpacing: '0.32em', textTransform: 'uppercase', background: 'rgba(8,6,4,0.55)', padding: '3px 8px', borderRadius: 100 }}>
                      {s.tag}
                    </span>
                  </div>

                  {/* Label */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <p style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.15, marginBottom: 5 }}>
                      {s.label}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,245,0.58)', fontSize: '0.73rem', lineHeight: 1.5 }}>
                      {s.desc}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-center"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.45)', fontSize: '0.75rem', lineHeight: 1.7 }}
            >
              Stil seçimi için WhatsApp üzerinden referans görsellerle saçınızı önceden birlikte değerlendiriyoruz.
            </motion.p>
          </div>
        </section>

        {/* ── Tesettür Gelin Başı ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#2A211D', borderTop: '1px solid rgba(248,245,242,0.06)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Tesettür Gelin Başı
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 4.5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.8px' }}>
                Örtünüze Uygun<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Özel Tasarım</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.60)', fontSize: '0.88rem', lineHeight: 1.85, marginTop: 20 }}>
                Tesettür gelin başı, örtünün bir parçası olarak değil, tasarımın merkezinde kurgulanır. Gelinliğin yaka yapısı, duvak boyu ve başlık tercihine göre bütünlüklü bir görünüm elde edilir.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {[
                {
                  title: 'Örtü Çeşitleri',
                  body: 'Tülbent, dantelli şal, boncuklu başlık, taçlı örtü ve pratik hazır başlık — her örtü tipine göre farklı sabitleme ve şekillendirme teknikleri uygulanıyor. Örtünüzü düğün günü getirmeniz yeterli.',
                },
                {
                  title: 'Duvak ve Taç Uyumu',
                  body: 'Duvak uzunluğu ve taç konumu örtünün üstüne ya da altına göre planlanıyor. Düşen duvak, tiara veya klasik tarak tutturma; seçim gelinliğin ve örtünün yapısına göre önerilir.',
                },
                {
                  title: 'Stil Önerileri',
                  body: 'Ön tarafta hacimli şekillendirme, arkada sıkı topuz ya da dalgalı form — tesettür başında görünür saçın stilini, örtünün nasıl oturacağını belirler. Tercihlerinizi WhatsApp\'tan fotoğrafla paylaşmanız işlemi kolaylaştırır.',
                },
                {
                  title: 'Hazırlık Önerileri',
                  body: 'Saçınızı yıkamış ve tamamen kurumuş halde gelmenizi öneririz. Kullanacağınız örtü, taç veya başlığı yanınızda getirin. Saçınızın uzunluğunu önceden paylaşırsanız süreye dair doğru bir tahmin verebiliriz.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex gap-5 mb-7"
                >
                  <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,143,122,0.15)', border: '1px solid rgba(201,143,122,0.30)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <span style={{ fontFamily: 'Instrument Serif, serif', color: '#C98F7A', fontSize: '0.85rem' }}>{i + 1}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: '#F8F5F2', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.03em', marginBottom: 5 }}>{item.title}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.82rem', lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Consultation ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>
                Konsültasyon
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4.5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.8px' }}>
                Saçınızı Düğün<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Gününe Hazırlamak</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {[
                {
                  title: 'Yüz Şekli Analizi',
                  body:  'Oval, yuvarlak, kare veya kalp yüz yapısına göre saç tasarımı farklılaşır. Doğru çerçeveleme, yüz hatlarını öne çıkarır; yanlış seçim ise en güzel stilin bile önüne geçebilir. WhatsApp görüşmesinde bunu birlikte değerlendiriyoruz.',
                },
                {
                  title: 'Gelinlik Uyumu',
                  body:  'Boyunluk kesimi saç tasarımını doğrudan etkiliyor. V yaka, bateau, kapalı veya askısız gelinlikler için farklı saç yükseklikleri ve hacim seviyeleri daha uyumlu bir bütün ortaya koyuyor.',
                },
                {
                  title: 'Duvak ve Aksesuar Uyumu',
                  body:  'Duvak uzunluğu, saç aksesuarı konumu ve başlık seçimi düğün günü hazırlığa başlamadan önce kısa bir konsültasyonla birlikte ele alınıyor. Aksesuar ve duvağınızı getirmenizi istiyoruz; bu sayede tasarım gerçek bütünlük içinde değerlendirilebiliyor.',
                },
                {
                  title: 'Hazırlık Süreci',
                  body:  'WhatsApp üzerinden referans görseller ve tercihler paylaşılıyor. Düğün sabahı hazırlığa başlamadan önce kısa bir konsültasyonla son detaylar netleştiriliyor; böylece sürpriz yaşanmıyor.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-8"
                  style={{ paddingLeft: 18, borderLeft: '2px solid rgba(201,143,122,0.30)' }}
                >
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.08rem', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.68)', fontSize: '0.87rem', lineHeight: 1.78 }}>{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Why Tokat Brides Travel ── */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 max-w-2xl"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>
                Tokat Genelinden Gelin Adayları
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px', marginBottom: 20 }}>
                Tokat'ın Dört Bir<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Yanından Gelinler</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.68)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                Salonumuz Turhal'da. Tokat Merkez, Zile, Erbaa, Niksar, Amasya ve Merzifon'dan gelin adayları yıllardır buraya geliyor. Uzaklık farklı; beklenti hep aynı: düğün gününde tam istenen sonuç.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { city: 'Tokat Merkez', dist: '~50 km', time: '45–50 dk' },
                { city: 'Zile',         dist: '21 km',  time: '23 dk'    },
                { city: 'Erbaa',        dist: '~55 km', time: '~55 dk'   },
                { city: 'Niksar',       dist: '~60 km', time: '~60 dk'   },
                { city: 'Amasya',       dist: '65 km',  time: '60 dk'    },
                { city: 'Merzifon',     dist: '114 km', time: '90 dk'    },
                { city: 'Turhal',       dist: 'Merkez', time: 'Buradayız' },
              ].map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="p-5"
                  style={{
                    background: loc.city === 'Turhal' ? '#2A211D' : 'white',
                    borderRadius: 4,
                    border: '1px solid rgba(42,33,29,0.10)',
                  }}
                >
                  <p style={{ fontFamily: 'Instrument Serif, serif', color: loc.city === 'Turhal' ? '#F8F5F2' : '#2A211D', fontSize: '1.05rem', marginBottom: 4 }}>{loc.city}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: loc.city === 'Turhal' ? '#C98F7A' : 'rgba(42,33,29,0.55)', fontSize: '0.72rem', marginBottom: 2 }}>{loc.dist}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: loc.city === 'Turhal' ? 'rgba(248,245,242,0.50)' : 'rgba(42,33,29,0.38)', fontSize: '0.68rem' }}>{loc.time}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.48)', fontSize: '0.78rem', lineHeight: 1.72 }}
            >
              Uzaktan gelen misafirlerimiz için randevu saatine özellikle önem veriyoruz. Gelen her gelin adayının yolculuk ettiğini biliyor, buna göre hazırlanıyoruz.
            </motion.p>
          </div>
        </section>

        {/* ── Wedding Day Experience ── */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 100%)', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>
                Süreç
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                Düğün Gününe<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Nasıl Hazırlanıyoruz?</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,143,122,0.15)', borderRadius: 4, overflow: 'hidden' }}>
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8"
                  style={{ background: 'linear-gradient(160deg, #1A1210 0%, #221812 100%)' }}
                >
                  <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.62rem', letterSpacing: '0.24em', display: 'block', marginBottom: 18 }}>{step.n}</span>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.25rem', lineHeight: 1.2, marginBottom: 14 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.82rem', lineHeight: 1.78 }}>{step.body}</p>
                </motion.div>
              ))}
            </div>
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
              className="mb-12"
            >
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>
                Sık Sorulan Sorular
              </p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                Aklınızdaki<br />
                <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Sorular</em>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
              <div>
                {FAQS.slice(0, Math.ceil(FAQS.length / 2)).map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                  >
                    <FAQItem
                      q={faq.q}
                      a={faq.a}
                      open={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                {FAQS.slice(Math.ceil(FAQS.length / 2)).map((faq, i) => {
                  const idx = Math.ceil(FAQS.length / 2) + i
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.05 }}
                    >
                      <FAQItem
                        q={faq.q}
                        a={faq.a}
                        open={openFaq === idx}
                        onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 md:py-36 px-6 md:px-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #F3ECE7 0%, #EFE5DF 50%, #F3ECE7 100%)', borderTop: '1px solid rgba(42,33,29,0.10)' }}
        >
          {/* Decorative corner lines */}
          <div className="absolute top-8 left-8 pointer-events-none hidden md:block" style={{ width: 60, height: 60, borderTop: '1px solid rgba(201,143,122,0.30)', borderLeft: '1px solid rgba(201,143,122,0.30)' }} />
          <div className="absolute bottom-8 right-8 pointer-events-none hidden md:block" style={{ width: 60, height: 60, borderBottom: '1px solid rgba(201,143,122,0.30)', borderRight: '1px solid rgba(201,143,122,0.30)' }} />

          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}
            >
              Gelin Saçı Randevusu
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.92, letterSpacing: '-1.5px', marginBottom: 24 }}
            >
              Tarihinizi<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Ayıralım</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.78, maxWidth: 440, margin: '0 auto 40px' }}
            >
              Bahar ve yaz tarihleri çabuk doluyor. WhatsApp'tan düğün tarihinizi ve istediğiniz stili belirtin; biz gerisini planlayalım.
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
                data-cta-location="tokat-gelin-saci-cta"
                data-service-name="Tokat Gelin Saçı"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium"
                style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}
              >
                {WA_SVG} WhatsApp&apos;tan Randevu Al
              </a>
              <a
                href={PHONE}
                data-cta-location="tokat-gelin-saci-cta"
                data-service-name="Tokat Gelin Saçı"
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
              Turhal, Tokat &nbsp;·&nbsp; Pzt,Çrş–Cmt 08:00–19:00 · Paz 08:00–17:00 · Sal kapalı
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
            <a
              href="https://maps.app.goo.gl/rt4Scbc17eowjUmZ6"
              target="_blank"
              rel="noopener noreferrer"
              data-cta-location="tokat-gelin-saci-harita"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 16px', background: '#2A211D', color: '#F8F5F2', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Yol Tarifi Al
            </a>
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
                <Link to="/tokat-gelin-saci" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.80)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Gelin Saçı</Link>
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
