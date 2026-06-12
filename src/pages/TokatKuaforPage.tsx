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

const SERVICES = [
  { title: 'Gelin Saçı',                    desc: 'Düğün günü ve öncesinde deneme seansıyla kişiye özel tasarım.'                 },
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
    a: 'Tokat Merkez\'den Turhal yaklaşık 50 km, D100 karayolu üzerinden 45–50 dakika. Zile\'den yaklaşık 40 km, Erbaa\'dan 55 km, Niksar\'dan 60 km. Turhal\'a düzenli minibüs ve otobüs seferleri de var.',
  },
  {
    q: 'Randevu almak için ne yapmalıyım?',
    a: 'WhatsApp veya telefon yeterli. Hangi hizmeti istediğinizi ve tarih tercihlerinizi bildirin. Özellikle yoğun dönemlerde önceden yazmak, istediğiniz tarihi almanızı kolaylaştırır.',
  },
  {
    q: 'Gelin saçı için ne kadar önceden randevu almalıyım?',
    a: 'Bahar ve yaz düğünleri için tarihler aylarca önceden dolabiliyor. Nisan\'dan eylül\'e kadar olan dönemde erken planlamak önemli. Düğün gününden 3–4 hafta önce deneme randevusu da ayarlanması gerekiyor.',
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
        <link rel="canonical" href="https://hulyastudio.com/tokat-kuafor" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://hulyastudio.com/' },
            { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://hulyastudio.com/tokat-kuafor' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HairSalon',
          name: 'Hülya Kuaför',
          alternateName: 'HÜLYA Hair & Beauty Studio',
          url: 'https://hulyastudio.com/tokat-kuafor',
          telephone: '+905412757160',
          foundingDate: '2005',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Turhal',
            addressRegion: 'Tokat',
            addressCountry: 'TR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.3867,
            longitude: 36.0836,
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            opens: '09:00',
            closes: '19:00',
          }],
          areaServed: [
            { '@type': 'City', name: 'Tokat' },
            { '@type': 'City', name: 'Turhal' },
            { '@type': 'City', name: 'Zile' },
            { '@type': 'City', name: 'Erbaa' },
            { '@type': 'City', name: 'Niksar' },
            { '@type': 'AdministrativeArea', name: 'Tokat Merkez' },
          ],
          sameAs: ['https://www.instagram.com/hulyaakuafor'],
          founder: { '@type': 'Person', name: 'Sibel Erturhan' },
          employee: { '@type': 'Person', name: 'Damla Erturhan' },
          knowsAbout: ['Gelin Saçı','Ombre','Balayage','Röfle','Saç Boyama','Saç Kesimi','Profesyonel Saç Tasarımı','Saç Bakımı'],
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
          style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 60%, #1A1210 100%)', minHeight: '60vh' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(201,143,122,0.12) 0%, transparent 60%)' }} />

          <div className="max-w-screen-xl mx-auto w-full relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.38em', textTransform: 'uppercase', marginBottom: 20 }}
            >
              Turhal, Tokat · Est. 2005
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
                2005'ten Bu Yana<br />
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
                Sibel Erturhan, bu salonu kurarken büyük bir şey hedeflemiyordu; iyi iş yapmak ve her müşteriyle tek tek ilgilenmek yeterliydi. Yirmi yılın ardından hâlâ aynı anlayışla devam ediyoruz.
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
                Gelin saçı için iki randevu gerekiyor. Önce deneme: düğünden 3–4 hafta önce yapılan bu seansta tasarımı netleştiriyoruz. Hangi stil, hangi aksesuar, saçın nasıl taşınması gerektiği hepsini o gün konuşuyoruz. Bazı gelinler kesin fikirle geliyor, bazıları seçeneklere bakmak istiyor; her iki durumda da başlangıç noktası aynı: saçınızı ve beklentinizi tanımak.
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
              Hata da yapıyoruz zaman zaman; herkes yapar. Ama önemli olan o hatayı kabul etmek ve düzeltmek. Yirmi yıldır süren güven bu dürüstlükten geliyor.
            </motion.p>
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
              Turhal, Tokat &nbsp;·&nbsp; Pzt – Cmt 09:00 – 19:00
            </motion.p>
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
                <a href="/#hizmetler" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Hizmetler</a>
                <a href="/#iletisim" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>İletişim</a>
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
                2005&apos;ten beri Turhal&apos;ın kuaför ve güzellik adresi
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
