import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const COLLAGE = '/images/284CFAFD-7C99-440A-9E04-1C5A55683283.png'
const pos = (col: number, row: number) =>
  `${col * 25}% ${parseFloat((row * 33.333).toFixed(2))}%`

const IMAGES = [
  { pos: pos(0, 0), caption: 'Saç Tasarımı',     idx: '01' },
  { pos: pos(3, 2), caption: 'Salon Deneyimi',    idx: '02' },
  { pos: pos(4, 2), caption: 'Renk Uygulaması',   idx: '03' },
  { pos: pos(1, 1), caption: 'Profesyonel Kesim', idx: '04' },
  { pos: pos(3, 1), caption: 'Röfle & Ombre',     idx: '05' },
]

function PhotoCard({ img }: { img: typeof IMAGES[0] }) {
  return (
    <div className="relative overflow-hidden group" style={{ borderRadius: 16 }}>
      <div
        className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          paddingBottom: '130%',
          backgroundImage: `url('${COLLAGE}')`,
          backgroundSize: '500% 400%',
          backgroundPosition: img.pos,
        }}
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
        <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.3)', fontSize: '0.55rem', letterSpacing: '0.2em' }}>
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
          Galeri — 05
        </p>
        <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: '2.4rem', lineHeight: 0.94, letterSpacing: '-0.5px', marginBottom: 24 }}>
          İlham<br />
          <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Galerisi</em>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.map(img => (
            <div key={img.idx} className={img.idx === '01' ? 'col-span-2' : ''}>
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
            Galeri — {IMAGES.length.toString().padStart(2, '0')}
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
              className="flex-shrink-0 relative overflow-hidden group"
              style={{ width: 'clamp(240px, 28vw, 400px)', height: '68vh', borderRadius: 20 }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('${COLLAGE}')`,
                  backgroundSize: '500% 400%',
                  backgroundPosition: img.pos,
                }}
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

    </section>
  )
}
