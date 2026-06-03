import { useReducer, useRef, useCallback, useEffect } from 'react'
import type { PlaybackState, PlaybackAction, CinematicFilter } from '../types'

const LOOP_DUR = 8.0

const INITIAL: PlaybackState = {
  isPlaying:    false,
  currentTime:  0,
  speed:        1.0,
  loopCount:    0,
  activeFilter: 'champagne-bloom',
}

function reducer(s: PlaybackState, a: PlaybackAction): PlaybackState {
  switch (a.type) {
    case 'TICK': {
      if (!s.isPlaying) return s
      const next = s.currentTime + a.dt * s.speed
      return next >= LOOP_DUR
        ? { ...s, currentTime: next % LOOP_DUR, loopCount: s.loopCount + 1 }
        : { ...s, currentTime: next }
    }
    case 'PLAY':        return { ...s, isPlaying: true  }
    case 'PAUSE':       return { ...s, isPlaying: false }
    case 'TOGGLE_PLAY': return { ...s, isPlaying: !s.isPlaying }
    case 'SET_SPEED':   return { ...s, speed: a.speed }
    case 'SET_FILTER':  return { ...s, activeFilter: a.filter }
    case 'SEEK':        return { ...s, currentTime: a.time }
    default:            return s
  }
}

export function usePlayback() {
  const [state, dispatch] = useReducer(reducer, INITIAL)

  const isPlayingRef = useRef(false)
  const speedRef     = useRef(1.0)
  const prevTsRef    = useRef<number | null>(null)
  const rafRef       = useRef<number>(0)

  // Keep refs in sync (read inside RAF without stale closure)
  isPlayingRef.current = state.isPlaying
  speedRef.current     = state.speed

  const tick = useCallback((ts: number) => {
    rafRef.current = requestAnimationFrame(tick)

    if (!isPlayingRef.current) {
      prevTsRef.current = null
      return
    }
    if (prevTsRef.current === null) {
      prevTsRef.current = ts
      return
    }

    const dt = (ts - prevTsRef.current) / 1000
    prevTsRef.current = ts
    dispatch({ type: 'TICK', dt })
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  const play        = useCallback(() => dispatch({ type: 'PLAY' }), [])
  const pause       = useCallback(() => dispatch({ type: 'PAUSE' }), [])
  const togglePlay  = useCallback(() => dispatch({ type: 'TOGGLE_PLAY' }), [])
  const setSpeed    = useCallback((speed: number) => dispatch({ type: 'SET_SPEED', speed }), [])
  const setFilter   = useCallback((filter: CinematicFilter) => dispatch({ type: 'SET_FILTER', filter }), [])
  const seekTo      = useCallback((time: number) => {
    prevTsRef.current = null
    dispatch({ type: 'SEEK', time })
  }, [])

  return { state, play, pause, togglePlay, setSpeed, setFilter, seekTo }
}
