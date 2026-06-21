import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Props {
  onComplete: () => void
}

export default function AwardsLoader({ onComplete }: Props) {
  const topRef    = useRef<HTMLDivElement>(null)
  const botRef    = useRef<HTMLDivElement>(null)
  const countRef  = useRef<HTMLSpanElement>(null)
  const barRef    = useRef<HTMLDivElement>(null)
  const brandRef  = useRef<HTMLDivElement>(null)
  const exitRef   = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const obj = { n: 0 }

    const tl = gsap.timeline({
      onComplete() {
        exitRef.current = gsap.timeline({ onComplete })
        exitRef.current
          .to(topRef.current, { yPercent: -100, duration: 1.0, ease: 'power4.inOut' })
          .to(botRef.current, { yPercent: 100,  duration: 1.0, ease: 'power4.inOut' }, '<')
      },
    })

    tl
      .to(obj, {
        n: 100,
        duration: 2.0,
        ease: 'power2.inOut',
        onUpdate() {
          if (countRef.current) {
            countRef.current.textContent = String(Math.round(obj.n)).padStart(3, '0')
          }
        },
      })
      .to(barRef.current, { scaleX: 1, duration: 2.0, ease: 'power2.inOut' }, '<')
      .fromTo(
        brandRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.out' },
        0.4
      )

    return () => {
      tl.kill()
      exitRef.current?.kill()
      exitRef.current = null
    }
  }, [onComplete])

  const sharedPanel: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    right: 0,
    background: '#0A0806',
  }

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden pointer-events-none">
      {/* top half */}
      <div
        ref={topRef}
        style={{ ...sharedPanel, top: 0, height: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '40px' }}
      >
        <div ref={brandRef} style={{ textAlign: 'center', clipPath: 'inset(0 100% 0 0)' }}>
          <p style={{ fontFamily: 'Instrument Serif, serif', color: '#FFF8F5', fontSize: '2.2rem', letterSpacing: '-0.5px' }}>
            HÜLYA
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33', fontSize: '0.58rem', letterSpacing: '0.38em', textTransform: 'uppercase', marginTop: 4 }}>
            Hair &amp; Beauty Studio
          </p>
        </div>
      </div>

      {/* bottom half */}
      <div
        ref={botRef}
        style={{ ...sharedPanel, bottom: 0, height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px', gap: '14px' }}
      >
        {/* progress bar */}
        <div style={{ width: 200, height: 1, background: 'rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
          <div
            ref={barRef}
            style={{ position: 'absolute', inset: 0, background: '#B9816F', transformOrigin: 'left', transform: 'scaleX(0)' }}
          />
        </div>

        <span ref={countRef} style={{ fontFamily: 'Inter, sans-serif', color: '#4A3A33', fontSize: '0.68rem', letterSpacing: '0.2em' }}>
          000
        </span>
      </div>
    </div>
  )
}
