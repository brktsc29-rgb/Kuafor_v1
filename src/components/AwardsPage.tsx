import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
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


export default function AwardsPage() {
  const [ready, setReady] = useState(false)
  const [kvkkOpen, setKvkkOpen] = useState(false)

  useLenis(!ready)

  const handleLoaderComplete = useCallback(() => setReady(true), [])

  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
    document.body.style.overflow = ''
    // Double-rAF: outer frame lets Lenis/GSAP ticker complete their first tick after
    // the overflow lock is removed; inner frame calls refresh with correct scroll offsets.
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => { ScrollTrigger.refresh() })
    })
    return () => { cancelAnimationFrame(outer); cancelAnimationFrame(inner) }
  }, [ready])

  return (
    <div className="awards-page" style={{ background: '#F8F5F2' }}>
      <Helmet>
        <title>Turhal Kadın Kuaförü | Hülya Kuaför · Tokat Gelin Saçı ve Ombre</title>
        <meta name="description" content="Turhal'ın kadın kuaförü Hülya Kuaför'de gelin saçı, ombre, röfle ve saç boyama. Tokat'ta 16+ yıllık deneyim, mekan hizmeti mevcut." />
        <link rel="canonical" href="https://www.hulyastudio.com" />
        <meta property="og:title" content="Turhal Kadın Kuaförü | Hülya Kuaför · Tokat Gelin Saçı ve Ombre" />
        <meta property="og:description" content="Turhal'ın kadın kuaförü Hülya Kuaför'de gelin saçı, ombre, röfle ve saç boyama. Tokat'ta 16+ yıllık deneyim." />
        <meta property="og:url" content="https://www.hulyastudio.com" />
        <meta property="og:image" content="https://www.hulyastudio.com/images/hulya-kuafor-turhal-hero.webp" />
        <meta name="twitter:title" content="Hülya Kuaför | Hair & Beauty Studio — Turhal, Tokat" />
        <meta name="twitter:description" content="Turhal, Tokat'ta kuaför hizmetleri. Saç kesimi, ombre, gelin saçı ve makyaj. 2010'dan beri." />
        <meta name="twitter:image" content="https://www.hulyastudio.com/images/hulya-kuafor-turhal-hero.webp" />
      </Helmet>
      {!ready && <AwardsLoader onComplete={handleLoaderComplete} />}

      <AwardsCursor />

      <AwardsNav ready={ready} />

      <main>
        <AwardsHero active={ready} />
        <AwardsMarquee />
        <AwardsStatement />
        <AwardsServices />
        <AwardsGallery />
        <AwardsMarquee reverse />
        <AwardsStory />
        <AwardsTestimonials />
        <AwardsTrust />
        <AwardsCTA />
      </main>

      <AwardsFooter onOpenKVKK={() => setKvkkOpen(true)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
    </div>
  )
}
