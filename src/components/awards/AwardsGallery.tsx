import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  { src: '/images/ChatGPT Image 4 Haz 2026 01_39_53.webp', caption: 'Saç Tasarımı',     alt: 'Hülya Kuaför Turhal saç tasarımı',            idx: '01' },
  { src: '/images/ChatGPT Image 4 Haz 2026 01_41_20.webp', caption: 'Salon Deneyimi',    alt: 'Tokat Turhal güzellik salonu iç mekan',        idx: '02' },
  { src: '/images/ChatGPT Image 4 Haz 2026 01_42_29.webp', caption: 'Renk Uygulaması',   alt: 'Turhal kuaför saç renklendirme ombre röfle',   idx: '03' },
  { src: '/images/ChatGPT Image 4 Haz 2026 01_44_01.webp', caption: 'Profesyonel Kesim', alt: 'Hülya Kuaför Turhal Tokat profesyonel kesim',  idx: '04' },
  { src: '/images/ChatGPT Image 4 Haz 2026 01_45_13.webp', caption: 'Röfle & Ombre',     alt: 'Tokat kuaför röfle ombre balayage uygulaması', idx: '05' },
]

function PhotoCard({ img }: { img: typeof IMAGES[0] }) {
  return (
    <div className="relative overflow-hidden group w-full h-full" style={{ borderRadius: 16 }}>
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.75) 0%, transparent 48%)' }}
      />
      <div className="absolute bottom-4 left-4">
        <span style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: '0.95rem', fontStyle: 'italic' }}>
          {img.caption}
        </span>
      </div>
      <div className="absolute top-3 right-3">
        <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.35)', fontSize: '0.55rem', letterSpacing: '0.2em' }}>
          {img.idx}
        </span>
      </div>
    </div>
  )
}

export default function AwardsGallery() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (!isDesktop) return

    gsap.registerPlugin(ScrollTrigger)

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const ctx = gsap.context(() => {
      const getScrollAmt = () => inner.scrollWidth - outer.offsetWidth

      gsap.to(inner, {
        x: () => -getScrollAmt(),
        ease: 'none',
        scrollTrigger: {
          trigger: outer,
          start: 'top top',
          end: () => `+=${getScrollAmt()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, outer)

    return () => ctx.revert()
  }, [])

  return (
    <section id="galeri" style={{ background: '#EFE5DF' }}>

      {/* ── MOBILE: 2-column grid ── */}
      <div className="block lg:hidden px-5 py-16">
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.45)', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8 }}>
          Galeri 05
        </p>
        <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '2.4rem', lineHeight: 0.94, letterSpacing: '-0.5px', marginBottom: 24 }}>
          İlham<br />
          <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Galerisi</em>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.map((img, i) => (
            <div
              key={img.idx}
              className={i === 0 ? 'col-span-2' : ''}
              style={{ aspectRatio: i === 0 ? '16/9' : '3/4' }}
            >
              <PhotoCard img={img} />
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: horizontal scroll ── */}
      <div
        ref={outerRef}
        className="hidden lg:block overflow-hidden"
        style={{ position: 'relative' }}
      >
        <div className="absolute top-8 left-14 z-20">
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.45)', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Galeri {IMAGES.length.toString().padStart(2, '0')}
          </p>
        </div>

        <div
          ref={innerRef}
          className="flex items-center"
          style={{ width: 'max-content', height: '100svh', paddingLeft: 'clamp(24px, 5vw, 56px)', paddingRight: 'clamp(24px, 5vw, 56px)', gap: 'clamp(12px, 2vw, 20px)' }}
        >
          <div
            className="flex-shrink-0 flex flex-col justify-end"
            style={{ width: 'clamp(180px, 22vw, 340px)', height: '68vh', paddingBottom: 24, paddingRight: 20 }}
          >
            <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', lineHeight: 0.94, letterSpacing: '-0.5px' }}>
              İlham<br />
              <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Galerisi</em>
            </h2>
          </div>

          {IMAGES.map(img => (
            <div
              key={img.idx}
              className="flex-shrink-0"
              style={{ width: 'clamp(240px, 28vw, 400px)', height: '68vh', borderRadius: 20, overflow: 'hidden' }}
            >
              <PhotoCard img={img} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
