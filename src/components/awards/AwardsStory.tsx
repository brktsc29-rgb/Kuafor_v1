import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const STATS = [
  { value: '10K+', label: 'Mutlu Müşteri' },
  { value: '21+',  label: 'Yıl Deneyim'  },
  { value: '4.9★', label: 'Ortalama Puan'},
]

export default function AwardsStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgWrapRef = useRef<HTMLDivElement>(null)
  const imgRef     = useRef<HTMLImageElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Image parallax (inner img moves slower than wrapper)
      gsap.to(imgRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Clip-path reveal on image wrapper
      gsap.fromTo(imgWrapRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.0,
          ease: 'power4.out',
          scrollTrigger: { trigger: imgWrapRef.current, start: 'top 80%' },
        }
      )

      // Text block reveal
      gsap.fromTo(textRef.current,
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 78%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hikayemiz"
      className="py-16 md:py-28 px-6 md:px-14"
      style={{ background: '#F8F5F2', borderTop: '1px solid rgba(42,33,29,0.10)' }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Image */}
        <div
          ref={imgWrapRef}
          className="relative overflow-hidden"
          style={{ borderRadius: 28, aspectRatio: '3 / 4', clipPath: 'inset(100% 0 0 0)' }}
        >
          <img
            ref={imgRef}
            src="/images/75EB7243-3A51-4F0C-9018-76DEE47AC5F7.webp"
            alt="HÜLYA Studio"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.16)', transformOrigin: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,6,4,0.25) 0%, transparent 60%)' }} />
        </div>

        {/* Text */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#C98F7A', fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 20 }}>
            Hikayemiz
          </p>
          <h2 style={{ fontFamily: 'Instrument Serif, serif', color: '#2A211D', fontSize: 'clamp(2rem, 4vw, 4.8rem)', lineHeight: 1.02, letterSpacing: '-0.5px', marginBottom: 24 }}>
            Güzelliğe<br />
            <em style={{ color: '#C98F7A', fontStyle: 'italic' }}>Farklı Bakış</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.88rem', lineHeight: 1.82, marginBottom: 14 }}>
            HÜLYA Hair &amp; Beauty Studio olarak güzelliğin yalnızca görünüşten ibaret olmadığına inanıyoruz. 2005'ten bu yana Turhal, Tokat'ta her müşterimize değer verdiğimizi ve özel hissettirdiğimizi gururla söylüyoruz.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.70)', fontSize: '0.88rem', lineHeight: 1.82, marginBottom: 40 }}>
            Yirmi yılı aşkın deneyimimiz ve içten bir tutkuyla hizmet veriyoruz. Ekibimiz her seferinde sizi en iyi hissettirecek sonuçlar için titizlikle çalışır.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {STATS.map(stat => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div style={{ fontFamily: 'Instrument Serif, serif', color: '#C98F7A', fontSize: '2.4rem', letterSpacing: '-0.5px' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(42,33,29,0.55)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
