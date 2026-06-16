import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin at module level so it applies before any child component's useEffect
// creates a ScrollTrigger instance. The ignoreMobileResize config is also set here as a
// baseline; the effect below re-applies it on re-mounts and reverts it on cleanup so it
// doesn't leak globally after the Lenis instance is destroyed.
if (!import.meta.env.SSR) {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true })
}

export let lenisInstance: Lenis | null = null

export function useLenis(stopped = false) {
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisInstance = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      ScrollTrigger.config({ ignoreMobileResize: false })
      lenisInstance = null
      gsap.ticker.remove(tick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!lenisInstance) return
    if (stopped) lenisInstance.stop()
    else lenisInstance.start()
  }, [stopped])
}
