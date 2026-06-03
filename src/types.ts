export interface StoryboardCue {
  id: string
  time: number        // seconds within the 8.0s loop
  title: string
  description: string
  focusArea: string
  lightingPrompt: string
  imageIndex: number
}

export type CinematicFilter =
  | 'natural'
  | 'champagne-bloom'
  | 'blush-romance'
  | 'classic-editorial'
  | 'golden-hour'

export interface PlaybackState {
  isPlaying: boolean
  currentTime: number // 0.0 – 8.0
  speed: number
  loopCount: number
  activeFilter: CinematicFilter
}

export type PlaybackAction =
  | { type: 'TICK'; dt: number }
  | { type: 'PLAY' }
  | { type: 'PAUSE' }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_SPEED'; speed: number }
  | { type: 'SET_FILTER'; filter: CinematicFilter }
  | { type: 'SEEK'; time: number }
