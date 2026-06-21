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
        <title>Hülya Kuaför | Tokat Gelin Saçı, Ombre ve Profesyonel Saç Tasarımı</title>
        <meta name="description" content="Tokat'ta profesyonel kuaför hizmetleri. Gelin saçı, ombre, röfle, saç boyama ve modern saç tasarımı için Hülya Kuaför ile güzelliğinizi öne çıkarın." />
        <link rel="canonical" href="https://www.hulyastudio.com/" />
        <meta property="og:title" content="Hülya Kuaför | Tokat Gelin Saçı ve Profesyonel Saç Tasarımı" />
        <meta property="og:description" content="Turhal, Tokat'ta 16+ yıllık deneyimle gelin saçı, ombre, röfle ve saç bakım hizmetleri." />
        <meta property="og:url" content="https://www.hulyastudio.com/" />
        <meta name="twitter:title" content="Hülya Kuaför | Hair & Beauty Studio — Turhal, Tokat" />
        <meta name="twitter:description" content="Turhal, Tokat'ta kuaför hizmetleri. Saç kesimi, ombre, gelin saçı ve makyaj. 2010'dan beri." />
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
