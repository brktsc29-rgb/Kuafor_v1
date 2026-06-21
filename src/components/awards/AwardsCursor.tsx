import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function AwardsCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Effect 1: detect mouse device and hide native cursor
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setVisible(true)
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = '' }
  }, [])

  // Effect 2: set up GSAP after cursor divs are actually in the DOM (visible=true)
  useEffect(() => {
    if (!visible) return
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const DOT_HALF  = 3   // half of 6px
    const RING_HALF = 19  // half of 38px
    const cx = window.innerWidth  / 2
    const cy = window.innerHeight / 2

    let mx = cx, my = cy
    let rx = cx, ry = cy

    // Start at viewport center so cursor is visible before first mouse move
    gsap.set(dot,  { x: cx - DOT_HALF,  y: cy - DOT_HALF  })
    gsap.set(ring, { x: cx - RING_HALF, y: cy - RING_HALF })

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      gsap.set(dot, { x: mx - DOT_HALF, y: my - DOT_HALF })
    }

    const tick = () => {
      rx += (mx - rx) * 0.10
      ry += (my - ry) * 0.10
      gsap.set(ring, { x: rx - RING_HALF, y: ry - RING_HALF })
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
    const t = setTimeout(refreshTargets, 500)

    return () => {
      gsap.ticker.remove(tick)
      document.removeEventListener('mousemove', onMove)
      clearTimeout(t)
    }
  }, [visible])

  if (!visible) return null

  const base: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    borderRadius: '50%',
    willChange: 'transform',
  }

  return (
    <>
      <div ref={dotRef}  style={{ ...base, width: 6,  height: 6,  background: '#ffffff' }} />
      <div ref={ringRef} style={{ ...base, width: 38, height: 38, border: '1.5px solid #ffffff' }} />
    </>
  )
}
