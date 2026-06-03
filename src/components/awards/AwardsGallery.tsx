import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85', caption: 'Saç Tasarımı',         idx: '01' },
  { src: 'https://images.unsplash.com/photo-1560066984-138daaa6e4b6?auto=format&fit=crop&w=900&q=85', caption: 'Salon Deneyimi',        idx: '02' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85', caption: 'Renk Uygulaması',       idx: '03' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85', caption: 'Profesyonel Bakım',     idx: '04' },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85', caption: 'Röfle & Ombre',          idx: '05' },
]

export default function AwardsGallery() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
    <div
      ref={outerRef}
      id="galeri"
      className="overflow-hidden"
      style={{ background: '#0A0806', position: 'relative' }}
    >
      {/* Floating label */}
      <div className="absolute top-8 left-6 md:left-14 z-20">
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          Galeri — {IMAGES.length.toString().padStart(2, '0')}
        </p>
      </div>

      <div
        ref={innerRef}
        className="flex items-center"
        style={{ width: 'max-content', height: '100svh', paddingLeft: 'clamp(24px, 5vw, 56px)', paddingRight: 'clamp(24px, 5vw, 56px)', gap: 'clamp(12px, 2vw, 20px)' }}
      >
        {/* Title card */}
        <div
          className="flex-shrink-0 flex flex-col justify-end"
          style={{ width: 'clamp(180px, 22vw, 340px)', height: '68vh', paddingBottom: 24, paddingRight: 20 }}
        >
          <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', lineHeight: 0.94, letterSpacing: '-0.5px' }}>
            İlham<br />
            <em style={{ color: '#B9816F', fontStyle: 'italic' }}>Galerisi</em>
          </h2>
        </div>

        {/* Photo cards */}
        {IMAGES.map((img) => (
          <div
            key={img.idx}
            className="flex-shrink-0 relative overflow-hidden group"
            style={{
              width: 'clamp(240px, 28vw, 400px)',
              height: '68vh',
              borderRadius: 20,
            }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.75) 0%, transparent 48%)' }}
            />
            <div className="absolute bottom-5 left-5">
              <span style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: '1.05rem', fontStyle: 'italic' }}>
                {img.caption}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.3)', fontSize: '0.58rem', letterSpacing: '0.2em' }}>
                {img.idx}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
