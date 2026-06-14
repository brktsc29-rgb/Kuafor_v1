import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '../hooks/useLenis'
import AwardsLoader      from './awards/AwardsLoader'
import AwardsCursor      from './awards/AwardsCursor'
import AwardsNav         from './awards/AwardsNav'
import AwardsHero        from './awards/AwardsHero'
import AwardsMarquee     from './awards/AwardsMarquee'
import AwardsStatement   from './awards/AwardsStatement'
import AwardsServices    from './awards/AwardsServices'
import AwardsGallery     from './awards/AwardsGallery'
import AwardsStory       from './awards/AwardsStory'
import AwardsTestimonials from './awards/AwardsTestimonials'
import AwardsTrust       from './awards/AwardsTrust'
import AwardsCTA         from './awards/AwardsCTA'
import AwardsFooter      from './awards/AwardsFooter'
import CookieBanner      from './awards/CookieBanner'
import KVKKModal         from './awards/KVKKModal'

gsap.registerPlugin(ScrollTrigger)

export default function AwardsPage() {
  const [ready, setReady] = useState(false)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  useLenis()

  // Lock scroll while loader is running
  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      ScrollTrigger.refresh()
    }
    return () => { document.body.style.overflow = '' }
  }, [ready])

  return (
    <div className="awards-page" style={{ background: '#F8F5F2' }}>
      <Helmet>
        <title>Hülya Kuaför | Tokat Gelin Saçı, Ombre ve Profesyonel Saç Tasarımı</title>
        <meta name="description" content="Tokat'ta profesyonel kuaför hizmetleri. Gelin saçı, ombre, röfle, saç boyama ve modern saç tasarımı için Hülya Kuaför ile güzelliğinizi öne çıkarın." />
        <link rel="canonical" href="https://hulyastudio.com/" />
        <meta property="og:title" content="Hülya Kuaför | Tokat Gelin Saçı ve Profesyonel Saç Tasarımı" />
        <meta property="og:description" content="Turhal, Tokat'ta 20+ yıllık deneyimle gelin saçı, ombre, röfle ve saç bakım hizmetleri." />
        <meta property="og:url" content="https://hulyastudio.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HairSalon',
          name: 'Hülya Kuaför',
          alternateName: 'HÜLYA Hair & Beauty Studio',
          description: 'Turhal, Tokat\'ta 20 yılı aşkın deneyimle profesyonel kuaför hizmetleri. Gelin saçı, ombre, balayage, röfle, saç boyama ve makyaj.',
          url: 'https://hulyastudio.com/',
          telephone: '+905412757160',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Turhal',
            addressLocality: 'Turhal',
            addressRegion: 'Tokat',
            postalCode: '60300',
            addressCountry: 'TR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.3868,
            longitude: 36.0820,
          },
          openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
          areaServed: ['Tokat', 'Turhal', 'Zile', 'Erbaa', 'Niksar'],
          hasMap: 'https://maps.google.com/?q=Hülya+Kuaför+Turhal+Tokat',
          sameAs: ['https://www.instagram.com/hulyaakuafor'],
          priceRange: '₺₺',
          currenciesAccepted: 'TRY',
          paymentAccepted: 'Cash, Credit Card',
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://hulyastudio.com/' },
          ],
        })}</script>
      </Helmet>
      {/* Loader — unmounts itself visually via GSAP, state removes it */}
      {!ready && <AwardsLoader onComplete={() => setReady(true)} />}

      {/* Custom cursor (desktop only) */}
      <AwardsCursor />

      {/* Sticky nav */}
      <AwardsNav ready={ready} />

      <main>
        {/* 1. Fullscreen video hero */}
        <AwardsHero active={ready} />

        {/* 2. Rose-gold scrolling marquee */}
        <AwardsMarquee />

        {/* 3. Word-by-word statement */}
        <AwardsStatement />

        {/* 4. Services list with staggered reveals */}
        <AwardsServices />

        {/* 5. Pinned horizontal scroll gallery */}
        <AwardsGallery />

        {/* 6. Reversed marquee */}
        <AwardsMarquee reverse />

        {/* 7. Story / About */}
        <AwardsStory />

        {/* 8. Testimonials carousel */}
        <AwardsTestimonials />

        {/* 9. Trust signals */}
        <AwardsTrust />

        {/* 10. Booking CTA */}
        <AwardsCTA />
      </main>

      <AwardsFooter onOpenKVKK={() => setKvkkOpen(true)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
    </div>
  )
}
