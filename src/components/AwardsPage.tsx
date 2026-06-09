import { useState, useEffect } from 'react'
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

        {/* 9. Booking CTA */}
        <AwardsCTA />
      </main>

      <AwardsFooter onOpenKVKK={() => setKvkkOpen(true)} />
      <CookieBanner onOpenKVKK={() => setKvkkOpen(true)} />
      <KVKKModal isOpen={kvkkOpen} onClose={() => setKvkkOpen(false)} />
    </div>
  )
}
