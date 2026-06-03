import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AwardsCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!

    let mx = -200, my = -200
    let rx = -200, ry = -200

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      gsap.set(dot, { x: mx, y: my })
    }

    const tick = () => {
      rx += (mx - rx) * 0.10
      ry += (my - ry) * 0.10
      gsap.set(ring, { x: rx, y: ry })
    }

    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.4, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot,  { scale: 0,   duration: 0.25 })
    }
    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' })
      gsap.to(dot,  { scale: 1, duration: 0.25 })
    }

    gsap.ticker.add(tick)
    document.addEventListener('mousemove', onMove)

    const refreshTargets = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }
    refreshTargets()

    // Re-scan after a tick in case DOM is still mounting
    const t = setTimeout(refreshTargets, 500)

    return () => {
      gsap.ticker.remove(tick)
      document.removeEventListener('mousemove', onMove)
      clearTimeout(t)
    }
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%',
  }

  return (
    <>
      <div ref={dotRef}  style={{ ...base, width: 6,  height: 6,  background: '#ffffff' }} />
      <div ref={ringRef} style={{ ...base, width: 38, height: 38, border: '1.5px solid #ffffff' }} />
    </>
  )
}
