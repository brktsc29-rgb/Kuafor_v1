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
    slug:    'klasik-ombre',
    label:   'Klasik Ombre',
    tag:     'OMBRE',
    desc:    'Kökten uca yumuşak koyudan açığa renk geçişi. Doğal ve bakımlı görünüm.',
    bg:      'linear-gradient(160deg, #1A0E08 0%, #2E1A0E 50%, #3D2010 100%)',
    accent:  '#C98F7A',
  },
  {
    slug:    'sombre',
    label:   'Sombre',
    tag:     'SOMBRE',
    desc:    'Subtle ombre — daha az kontrast, çok daha doğal ve hafif geçiş.',
    bg:      'linear-gradient(160deg, #141008 0%, #221A0E 50%, #2E2214 100%)',
    accent:  '#D4A090',
  },
  {
    slug:    'balayage',
    label:   'Balayage',
    tag:     'BALAYAGE',
    desc:    'Fırça ile serbest uygulama. Organik, güneşin değdiği saç efekti.',
    bg:      'linear-gradient(160deg, #180D08 0%, #281508 50%, #381C0A 100%)',
    accent:  '#B9816F',
  },
  {
    slug:    'california-ombre',
    label:   'California',
    tag:     'TREND',
    desc:    'Kumlu sarı tonlarla yaz ışığı hissi. Özellikle açık ve orta saçlara yakışır.',
    bg:      'linear-gradient(160deg, #1A1208 0%, #2A1C08 50%, #3A2408 100%)',
    accent:  '#C98F7A',
  },
  {
    slug:    'brunette-ombre',
    label:   'Brunette Ombre',
    tag:     'KLASİK',
    desc:    'Koyu kahveden orta kahveye sıcak geçiş. Bakımlı ve zamansız.',
    bg:      'linear-gradient(160deg, #0E0C08 0%, #1A1408 50%, #241C0A 100%)',
    accent:  '#D4A090',
  },
  {
    slug:    'copper-ombre',
    label:   'Bakır Ombre',
    tag:     'SICAK TON',
    desc:    'Bakır, kızıl ve bronz tonlarıyla sıcak ışıltı. Sonbahar için ideal.',
    bg:      'linear-gradient(160deg, #180E08 0%, #28140A 50%, #38180A 100%)',
    accent:  '#B9816F',
  },
]

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Renk Analizi',
    body: 'Saçın mevcut rengi, daha önce boyama yapılıp yapılmadığı ve saç sağlığı değerlendiriliyor. Hangi tekniğin — ombre, sombre veya balayage — size ve saçınıza en uygun olduğunu bu aşamada belirliyoruz.',
  },
  {
    n: '02',
    title: 'Ton Seçimi',
    body: 'Ten renginize, göz rengine ve seçmek istediğiniz stile göre ton önerisi yapılıyor. Kataloğu birlikte inceliyoruz; hayal ettiğiniz sonuç ile gerçekçi beklenti arasındaki dengeyi konuşuyoruz.',
  },
  {
    n: '03',
    title: 'Uygulama',
    body: 'Seçilen tekniğe göre uygulama yapılıyor. Ombre için gradyan geçiş, balayage için fırça uygulaması farklı süre alıyor. İşlem sırasında saç sağlığını koruyacak ürünler kullanılıyor.',
  },
  {
    n: '04',
    title: 'Bakım ve Son Görünüm',
    body: 'Renk sabitleme işlemi tamamlandıktan sonra saç yıkanıyor ve son şekillendirme yapılıyor. Size eve gidişte nasıl bakım yapacağınızı ve rengi uzun süre canlı tutacak ipuçlarını aktarıyoruz.',
  },
]

const CARE_TIPS = [
  { title: 'Sülfatsız Şampuan', body: 'Renk boyan saçlar sülfat içermeyen şampuanla yıkandığında renk daha uzun süre canlı kalıyor.' },
  { title: 'Sık Yıkamaktan Kaçının', body: 'Her gün yıkamak rengin solmasını hızlandırıyor. Haftada 2–3 kez yıkamak renk ömrünü uzatıyor.' },
  { title: 'Isı Koruyucu', body: 'Fön, düzleştirici veya maşa kullanmadan önce ısı koruyucu ürün uygulamak renk kaybını ve kırılmayı önlüyor.' },
  { title: 'UV Koruma', body: 'Yaz aylarında güneş açık renkli saçı daha çabuk soldurur. UV korumalı saç ürünleri veya şapka bu konuda yardımcı.' },
  { title: 'Bakım Maskesi', body: 'Haftada bir derin nem maskesi saçın esnekliğini koruyor. Boyalı saçlar doğal saça göre daha fazla nem ihtiyacı duyuyor.' },
]

const FAQS = [
  { q: 'Ombre uygulaması ne kadar sürer?', a: 'Saçın uzunluğuna ve tekniğe göre 2–4 saat arasında değişir. Balayage genellikle daha hızlı, tam boyama daha uzun sürer. Randevu öncesinde tahmini süreyi paylaşıyoruz.' },
  { q: 'Koyu saça ombre olur mu?', a: 'Olur, ama doğal siyah ya da çok koyu saçta açık ton elde edebilmek için önce açma işlemi gerekiyor. Bu durumda süreç birden fazla seans alabilir. Saçın sağlığını korumak için aşamalı yaklaşım öneriyoruz.' },
  { q: 'Ombre ile sombre arasındaki fark nedir?', a: 'Ombre daha belirgin, koyudan açığa keskin bir geçiş. Sombre (subtle ombre) çok daha yumuşak ve az fark edilir bir geçiş. Hangi görünümü tercih ettiğinize bağlı olarak ikisini de yapıyoruz.' },
  { q: 'Balayage aynı şey mi?', a: 'Hayır, farklı bir teknik. Balayage fırça ile elle uygulanıyor; yani geçiş çizgisi daha organik ve düzensiz çıkıyor. Sonuç daha serbest, doğal güneş altında açılmış gibi bir görünüm. Ombre ise daha yapılandırılmış bir geçiş.' },
  { q: 'Kaç seansta tamamlanır?', a: 'Hedef renge göre değişir. Koyudan çok açığa geçmek isteyenler için iki seans gerekebilir. Orta tonlarda tek seansta çok güzel sonuç alınabiliyor. Saçınızın mevcut durumunu görünce daha net söyleyebiliyoruz.' },
  { q: 'Sonraki bakım ne zaman gerekir?', a: 'Ombre ve balayage diğer boyama tekniklerine göre bakımı daha kolay. Kök belirginleşme olmadığı için 3–5 ayda bir bakım yeterli olabiliyor. Bu da önemli bir avantaj.' },
  { q: 'Saçım hasar görür mü?', a: 'Her boyama işlemi saçı bir mikro etkiler. Ancak doğru ürünler, doğru teknik ve seans aralarında yeterli bakım yapılırsa bu etki minimumda kalıyor. Saçınızın mevcut sağlık durumuna göre size açıkça bilgi veriyoruz.' },
  { q: 'Fiyat hakkında bilgi alabilir miyim?', a: 'Saçın uzunluğuna, tekniğe ve mevcut renge göre değiştiği için sabit fiyat listesi yayınlamıyoruz. WhatsApp üzerinden bir fotoğraf gönderin; yaklaşık bilgi verelim.' },
]

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
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://hulyastudio.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tokat Kuaför', item: 'https://hulyastudio.com/tokat-kuafor' },
    { '@type': 'ListItem', position: 3, name: 'Tokat Ombre', item: 'https://hulyastudio.com/tokat-ombre' },
  ],
}

const HAIRSALON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Hülya Hair & Beauty Studio',
  description: 'Tokat Turhal\'da ombre, sombre ve balayage saç renklendirme hizmetleri. Profesyonel teknik, kişiye özel renk analizi.',
  url: 'https://hulyastudio.com/tokat-ombre',
  telephone: '+905412757160',
  address: { '@type': 'PostalAddress', streetAddress: 'Turhal', addressLocality: 'Turhal', addressRegion: 'Tokat', addressCountry: 'TR' },
  geo: { '@type': 'GeoCoordinates', latitude: 40.3868, longitude: 36.0820 },
  openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
  areaServed: ['Tokat', 'Turhal', 'Zile', 'Erbaa', 'Niksar'],
}

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

export default function TokatOmbrePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Tokat Ombre | Hülya Kuaför Saç Renklendirme ve Balayage</title>
        <meta name="description" content="Tokat'ta ombre, sombre ve balayage saç renklendirme hizmetleri. Turhal'daki salonumuzda kişiye özel renk analizi ve profesyonel uygulama." />
        <link rel="canonical" href="https://hulyastudio.com/tokat-ombre" />
        <meta property="og:title" content="Tokat Ombre | Hülya Kuaför" />
        <meta property="og:description" content="Tokat ombre, sombre ve balayage. Turhal'da kişiye özel renk analizi." />
        <meta property="og:url" content="https://hulyastudio.com/tokat-ombre" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(HAIRSALON_SCHEMA)}</script>
      </Helmet>

      <div style={{ minHeight: '100svh', background: '#F8F5F2' }}>

        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-14 py-4 flex items-center justify-between" style={{ background: 'rgba(8,6,4,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link to="/" style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.35rem', letterSpacing: '-0.3px', textDecoration: 'none' }}>HÜLYA</Link>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full px-5 py-2 text-[0.75rem] font-medium" style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}>
            {WA_SVG} Randevu Al
          </a>
        </nav>

        {/* Hero */}
        <section className="relative flex items-end overflow-hidden" style={{ height: '100svh', background: '#080604' }}>
          {/* Ombre-inspired gradient as visual metaphor */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #1A0A04 0%, #2E1208 25%, #3D1A08 45%, #4A200A 65%, #5C2A0C 80%, #70380E 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(185,129,111,0.22) 0%, transparent 65%)', mixBlendMode: 'screen' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(8,6,4,0.94) 0%, rgba(8,6,4,0.40) 35%, rgba(8,6,4,0.10) 60%, transparent 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(8,6,4,0.60) 0%, transparent 60%)' }} />

          {/* Decorative gradient strip */}
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none hidden md:block" style={{ width: '40%', background: 'linear-gradient(180deg, #5C3010 0%, #9A5820 20%, #C48030 45%, #E0A040 65%, #F0C060 85%, #F8E080 100%)', opacity: 0.18 }} />

          <div className="relative z-10 w-full px-6 md:px-14 pb-14 md:pb-20 max-w-screen-xl mx-auto">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontFamily: 'Inter, sans-serif', color: '#B9816F', fontSize: '0.60rem', letterSpacing: '0.38em', textTransform: 'uppercase', marginBottom: 22 }}>
              Saç Renklendirme · Turhal, Tokat
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(3rem, 9.5vw, 10.5rem)', lineHeight: 0.88, letterSpacing: '-2px', marginBottom: 28 }}>
              Tokat Ombre<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>ve Balayage</em>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} style={{ height: 1, background: 'rgba(255,248,245,0.15)', maxWidth: 420, marginBottom: 24 }} />
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,245,0.72)', fontSize: '0.92rem', lineHeight: 1.78, maxWidth: 480, marginBottom: 36 }}>
              Koyudan açığa yumuşak geçiş. Saçınıza özel teknik ve ton seçimiyle doğal, sürdürülebilir renk.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium" style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}>
                {WA_SVG} Randevu Al
              </a>
              <a href={PHONE} className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[0.82rem]" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}>
                +90 (541) 275 71 60
              </a>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="px-6 md:px-14 py-3" aria-label="Breadcrumb" style={{ borderBottom: '1px solid rgba(42,33,29,0.08)', background: '#F3ECE7' }}>
          <ol className="flex items-center gap-2 max-w-screen-xl mx-auto" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Ana Sayfa</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><Link to="/tokat-kuafor" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.50)', fontSize: '0.72rem', textDecoration: 'none' }}>Tokat Kuaför</Link></li>
            <li style={{ color: 'rgba(42,33,29,0.30)', fontSize: '0.72rem' }}>›</li>
            <li><span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.72rem' }}>Tokat Ombre</span></li>
          </ol>
        </nav>

        {/* Technique explanation */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F8F5F2' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 18 }}>Teknikler</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4.5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.8px' }}>
                Ombre, Sombre<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>ve Balayage</em>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              {[
                { title: 'Ombre', body: 'Köklerden uca doğru koyudan açığa giden belirgin bir renk geçişidir. Geçiş çizgisi net olmasa da açık ve koyu ton arasındaki fark gözle görülür. Dramatik ve modern bir görünüm sunar.' },
                { title: 'Sombre (Subtle Ombre)', body: 'Klasik ombrenin daha yumuşak hâli. Renk geçişi çok daha az belirgin; sanki saçınız doğal olarak birkaç ton açılmış gibi görünüyor. Bakımı en kolay tekniklerden biridir.' },
                { title: 'Balayage', body: 'Fransızca "süpürmek" anlamına gelir. Boya fırça ile elle, özgürce belirli tellere uygulanır. Sonuç organik, güneşin değdiği saç efekti. Folio gerektirmez; bu yüzden görünüm daha akıcı ve doğaldır.' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="mb-8" style={{ paddingLeft: 18, borderLeft: '2px solid rgba(201,143,122,0.30)' }}>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.08rem', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.68)', fontSize: '0.87rem', lineHeight: 1.78 }}>{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-14">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>Stiller</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2.2rem, 5vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-1px' }}>
                Ombre<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Koleksiyonu</em>
              </h2>
            </motion.div>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
              {TECHNIQUES.map((t, i) => (
                <motion.figure key={t.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }} className="relative overflow-hidden m-0" style={{ background: t.bg, borderRadius: 4, aspectRatio: '4/5' }}>
                  <img src={`/images/ombre/${t.slug}.webp`} alt={`Tokat ${t.label.toLowerCase()} ombre saç renklendirme — Hülya Kuaför Turhal`} className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.85 }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} loading="lazy" width="260" height="325" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.88) 0%, rgba(8,6,4,0.15) 55%, transparent 100%)' }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontFamily: 'Inter, sans-serif', color: t.accent, fontSize: '0.52rem', letterSpacing: '0.32em', textTransform: 'uppercase', background: 'rgba(8,6,4,0.55)', padding: '3px 8px', borderRadius: 100 }}>{t.tag}</span>
                  </div>
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <p style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.15, marginBottom: 5 }}>{t.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,248,245,0.58)', fontSize: '0.73rem', lineHeight: 1.5 }}>{t.desc}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: 'linear-gradient(160deg, #1A1210 0%, #2A1C18 100%)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>Süreç</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                Nasıl<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Yapılıyor?</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,143,122,0.15)', borderRadius: 4, overflow: 'hidden' }}>
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8" style={{ background: 'linear-gradient(160deg, #1A1210 0%, #221812 100%)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.62rem', letterSpacing: '0.24em', display: 'block', marginBottom: 18 }}>{step.n}</span>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F5F2', fontSize: '1.25rem', lineHeight: 1.2, marginBottom: 14 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.55)', fontSize: '0.82rem', lineHeight: 1.78 }}>{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-16 md:py-24 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 max-w-xl">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 14 }}>Bakım</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4.5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.8px' }}>
                Rengi Uzun<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Süre Korumak</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid rgba(42,33,29,0.10)', borderRadius: 4, overflow: 'hidden' }}>
              {CARE_TIPS.map((tip, i) => (
                <motion.div key={tip.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-6" style={{ background: i % 2 === 0 ? 'white' : '#F8F5F2', borderBottom: '1px solid rgba(42,33,29,0.08)' }}>
                  <h3 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '1.08rem', marginBottom: 8 }}>{tip.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.84rem', lineHeight: 1.75 }}>{tip.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-10 px-6 md:px-14" style={{ background: '#F3ECE7', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.45)', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>İlgili Hizmetler</p>
            <div className="flex flex-wrap gap-6">
              {[
                { to: '/tokat-rofle', label: 'Tokat Röfle →' },
                { to: '/tokat-gelin-saci', label: 'Tokat Gelin Saçı →' },
                { to: '/tokat-makyaj', label: 'Tokat Makyaj →' },
                { to: '/tokat-kuafor', label: 'Tüm Hizmetler →' },
              ].map(link => (
                <Link key={link.to} to={link.to} style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.78rem', letterSpacing: '0.06em', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>{link.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-28 px-6 md:px-14" style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.08)' }}>
          <div className="max-w-screen-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 16 }}>SSS</p>
              <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 5vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-1px' }}>
                Sık Sorulan<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Sorular</em>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
              <div>{FAQS.slice(0, 4).map((f, i) => <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}><FAQItem q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} /></motion.div>)}</div>
              <div>{FAQS.slice(4).map((f, i) => { const idx = 4 + i; return <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}><FAQItem q={f.q} a={f.a} open={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} /></motion.div> })}</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-36 px-6 md:px-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F3ECE7 0%, #EFE5DF 50%, #F3ECE7 100%)', borderTop: '1px solid rgba(42,33,29,0.10)' }}>
          <div className="absolute top-8 left-8 pointer-events-none hidden md:block" style={{ width: 60, height: 60, borderTop: '1px solid rgba(201,143,122,0.30)', borderLeft: '1px solid rgba(201,143,122,0.30)' }} />
          <div className="absolute bottom-8 right-8 pointer-events-none hidden md:block" style={{ width: 60, height: 60, borderBottom: '1px solid rgba(201,143,122,0.30)', borderRight: '1px solid rgba(201,143,122,0.30)' }} />
          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 22 }}>Renklendirme Randevusu</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.92, letterSpacing: '-1.5px', marginBottom: 24 }}>
              Tonunuzu<br /><em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Bulalım</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.65)', fontSize: '0.9rem', lineHeight: 1.78, maxWidth: 440, margin: '0 auto 40px' }}>
              Bir fotoğraf gönderin — saçınızın mevcut durumuna bakarak size uygun teknik ve ton önerisi yapalım.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full px-8 py-4 text-[0.82rem] font-medium" style={{ fontFamily: 'Inter, sans-serif', background: '#C98F7A', color: '#FFF8F5', textDecoration: 'none' }}>{WA_SVG} WhatsApp&apos;tan Randevu Al</a>
              <a href={PHONE} className="flex items-center gap-2 rounded-full px-8 py-4 text-[0.82rem]" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(201,143,122,0.45)', color: '#C98F7A', textDecoration: 'none' }}>+90 (541) 275 71 60</a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }} className="mt-10" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.40)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>Turhal, Tokat &nbsp;·&nbsp; Pzt – Cmt 09:00 – 19:00</motion.p>
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
                {([['/', 'Ana Sayfa'], ['/tokat-kuafor', 'Tokat Kuaför'], ['/tokat-gelin-saci', 'Gelin Saçı'], ['/tokat-ombre', 'Ombre'], ['/tokat-rofle', 'Röfle'], ['/tokat-makyaj', 'Makyaj']] as [string, string][]).map(([to, label]) => (
                  <Link key={to} to={to} style={{ fontFamily: 'Inter, sans-serif', color: to === '/tokat-ombre' ? 'rgba(201,143,122,0.85)' : 'rgba(248,245,242,0.42)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>{label}</Link>
                ))}
              </nav>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.32)', fontSize: '0.68rem' }}>&copy; {new Date().getFullYear()} HÜLYA Studio</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5" style={{ borderTop: '1px solid rgba(248,245,242,0.06)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(248,245,242,0.18)', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>2005&apos;ten beri Turhal&apos;ın kuaför ve güzellik adresi</p>
              <button onClick={() => setKvkkOpen(true)} style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(201,143,122,0.55)', fontSize: '0.58rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Gizlilik Politikası · KVKK</button>
            </div>
          </div>
        </footer>
      </div>

      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
    </>
  )
}
