import { useState, useCallback } from 'react'
import type { StoryboardCue } from '../types'
import { usePlayback }    from '../hooks/usePlayback'
import { useAudioSynth }  from '../hooks/useAudioSynth'
import CinematicFrame     from './campaign/CinematicFrame'
import StoryboardPanel    from './campaign/StoryboardPanel'
import PlaybackControls   from './campaign/PlaybackControls'
import FilterPicker       from './campaign/FilterPicker'

const CUES: StoryboardCue[] = [
  {
    id: 'opening',
    time: 0,
    title: 'Opening',
    description: 'Salon atmosphere — soft diffused champagne morning light',
    focusArea: 'Full environment establishing shot',
    lightingPrompt: 'Soft champagne light through frosted glass diffusion panels',
    imageIndex: 0,
  },
  {
    id: 'model-touch',
    time: 2.667,
    title: 'Model Touch',
    description: 'Intimate close-up of artisan hands sculpting the signature style',
    focusArea: 'Hands & hair interaction — medium close-up',
    lightingPrompt: 'Warm rim light catches individual hair strands mid-air',
    imageIndex: 1,
  },
  {
    id: 'macro-strands',
    time: 5.333,
    title: 'Macro Strands',
    description: 'Cinematic macro of luminous hair texture in backlit glory',
    focusArea: 'Individual strands — extreme close-up',
    lightingPrompt: 'High-key backlit sparkle on strand tips and cuticle layers',
    imageIndex: 2,
  },
]

export default function CampaignPlayer({ onExit }: { onExit?: () => void }) {
  const { state, togglePlay, setSpeed, setFilter, seekTo } = usePlayback()
  const { start, stop, sparkle }                            = useAudioSynth()
  const [audioOn, setAudioOn]                               = useState(false)

  const handleTogglePlay  = useCallback(() => togglePlay(), [togglePlay])

  const handleToggleAudio = useCallback(() => {
    setAudioOn(prev => {
      if (prev) { stop();  return false }
      else      { start(); return true  }
    })
  }, [start, stop])

  const handleSparkle = useCallback(() => {
    if (audioOn) sparkle()
  }, [audioOn, sparkle])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-6 pb-10 overflow-y-auto"
      style={{ background: '#0B0906' }}
    >
      {/* ── Header ── */}
      <div className="w-full max-w-[420px] mb-5 flex items-end justify-between">
        <div>
          <p style={{ fontFamily: 'Instrument Serif, serif', color: '#F0EAE0', fontSize: '1.35rem', letterSpacing: '-0.3px' }}>
            HÜLYA
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#3A2820', fontSize: '0.52rem', letterSpacing: '0.34em', textTransform: 'uppercase', marginTop: 2 }}>
            Campaign Preview · 2024
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Confidential badge */}
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.48rem', letterSpacing: '0.22em',
            color: '#2A1A10', border: '1px solid #221208', padding: '3px 8px', borderRadius: 100, textTransform: 'uppercase',
          }}>
            Confidential
          </span>
          {/* Back link */}
          {onExit && (
            <button
              onClick={onExit}
              className="text-[0.52rem] tracking-[0.16em] uppercase transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif', color: '#3A2820', background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7A6A63')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3A2820')}
            >
              ← Site
            </button>
          )}
        </div>
      </div>

      {/* ── 9:16 Cinematic Frame ── */}
      <div className="w-full" style={{ maxWidth: 'min(360px, calc((100svh - 340px) * 9 / 16))' }}>
        <CinematicFrame playback={state} cues={CUES} onSparkle={handleSparkle} />
      </div>

      {/* ── Storyboard selector ── */}
      <div className="w-full max-w-[420px] mt-6">
        <StoryboardPanel cues={CUES} playback={state} onSelect={seekTo} />
      </div>

      {/* ── Playback controls ── */}
      <div className="w-full mt-5" style={{ maxWidth: 'min(360px, calc((100svh - 340px) * 9 / 16))' }}>
        <PlaybackControls
          playback={state}
          audioOn={audioOn}
          onTogglePlay={handleTogglePlay}
          onToggleAudio={handleToggleAudio}
          onSetSpeed={setSpeed}
        />
      </div>

      {/* ── Filter picker ── */}
      <div className="w-full max-w-[420px] mt-5">
        <FilterPicker active={state.activeFilter} onChange={setFilter} />
      </div>

      {/* ── Tap hint ── */}
      <p className="mt-6 text-[0.52rem] tracking-[0.22em] uppercase text-center" style={{ fontFamily: 'Inter, sans-serif', color: '#2A1208' }}>
        Tap the frame to release light sparks
      </p>
    </div>
  )
}
