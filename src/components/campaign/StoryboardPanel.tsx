import type { StoryboardCue, PlaybackState } from '../../types'

// Tiny thumbnail per cue (same images, cropped small)
const THUMBS = [
  'https://images.unsplash.com/photo-1560066984-138daaa6e4b6?auto=format&fit=crop&w=160&h=285&q=80&crop=center',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=160&h=285&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=160&h=285&q=80',
]

interface Props {
  cues: StoryboardCue[]
  playback: PlaybackState
  onSelect: (t: number) => void
}

export default function StoryboardPanel({ cues, playback, onSelect }: Props) {
  // Determine active cue id
  let activeId = cues[0].id
  for (const c of cues) if (playback.currentTime >= c.time) activeId = c.id

  // Progress within active cue
  const activeIdx  = cues.findIndex(c => c.id === activeId)
  const cueStart   = cues[activeIdx].time
  const cueEnd     = cues[activeIdx + 1]?.time ?? 8.0
  const cueProgress = (playback.currentTime - cueStart) / (cueEnd - cueStart)

  return (
    <div className="flex flex-col gap-3">
      {/* Label */}
      <p className="text-center text-[0.52rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif', color: '#3A2820' }}>
        Storyboard
      </p>

      <div className="flex justify-center gap-3">
        {cues.map((cue, i) => {
          const isActive = cue.id === activeId
          return (
            <button
              key={cue.id}
              onClick={() => onSelect(cue.time)}
              className="flex flex-col items-center gap-2 border-0 bg-transparent cursor-pointer p-0 group"
              style={{ minWidth: 72 }}
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden transition-all duration-350"
                style={{
                  width: 72, height: 128,
                  borderRadius: 12,
                  border: isActive ? '2px solid #C9A87C' : '2px solid rgba(255,255,255,0.07)',
                  boxShadow: isActive ? '0 0 22px rgba(201,168,124,0.30)' : 'none',
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                <img
                  src={THUMBS[i]}
                  alt={cue.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ filter: isActive ? 'brightness(0.88) saturate(1.1)' : 'brightness(0.48) saturate(0.7)' }}
                />

                {/* Cue progress bar on active */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'rgba(201,168,124,0.25)' }}>
                    <div
                      className="h-full transition-none"
                      style={{ width: `${Math.min(cueProgress, 1) * 100}%`, background: '#C9A87C' }}
                    />
                  </div>
                )}

                {/* Index */}
                <div
                  className="absolute top-2 left-2 text-[0.46rem] font-mono tracking-wide"
                  style={{ color: isActive ? '#C9A87C' : 'rgba(255,255,255,0.28)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Time stamp */}
                <div
                  className="absolute bottom-3 right-1.5 text-[0.42rem] font-mono"
                  style={{ color: isActive ? 'rgba(201,168,124,0.8)' : 'rgba(255,255,255,0.2)' }}
                >
                  {cue.time.toFixed(1)}s
                </div>
              </div>

              {/* Title */}
              <p
                className="text-[0.54rem] tracking-[0.1em] uppercase text-center leading-tight"
                style={{ fontFamily: 'Inter, sans-serif', color: isActive ? '#C9A87C' : 'rgba(255,255,255,0.22)', maxWidth: 72 }}
              >
                {cue.title}
              </p>
            </button>
          )
        })}
      </div>

      {/* Active cue detail */}
      <div className="text-center mt-1">
        {cues.filter(c => c.id === activeId).map(c => (
          <p key={c.id} className="text-[0.58rem] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.22)', maxWidth: 260, margin: '0 auto' }}>
            {c.focusArea}
          </p>
        ))}
      </div>
    </div>
  )
}
