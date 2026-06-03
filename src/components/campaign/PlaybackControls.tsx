import type { PlaybackState } from '../../types'

const SPEEDS = [
  { label: '⅛×', value: 0.125 },
  { label: '¼×', value: 0.25  },
  { label: '½×', value: 0.5   },
  { label: '1×', value: 1.0   },
]

interface Props {
  playback: PlaybackState
  audioOn: boolean
  onTogglePlay: () => void
  onToggleAudio: () => void
  onSetSpeed: (s: number) => void
}

const GOLD = '#C9A87C'
const GOLD_DIM = 'rgba(201,168,124,0.18)'

export default function PlaybackControls({ playback, audioOn, onTogglePlay, onToggleAudio, onSetSpeed }: Props) {
  const progress = playback.currentTime / 8.0

  return (
    <div className="flex flex-col gap-4 w-full">

      {/* ── Progress bar ── */}
      <div className="group relative h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${progress * 100}%`, background: `linear-gradient(to right, #B9816F, ${GOLD})`, transition: 'none' }}
        />
        {/* Playhead dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
          style={{ left: `calc(${progress * 100}% - 5px)`, background: GOLD, boxShadow: `0 0 8px ${GOLD}` }}
        />
      </div>

      {/* ── Main controls row ── */}
      <div className="flex items-center justify-between gap-2">

        {/* Speed pills */}
        <div className="flex items-center gap-1.5">
          {SPEEDS.map(s => {
            const on = playback.speed === s.value
            return (
              <button
                key={s.value}
                onClick={() => onSetSpeed(s.value)}
                className="rounded-full px-2.5 py-1 text-[0.58rem] tracking-wide transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: on ? GOLD_DIM : 'rgba(255,255,255,0.04)',
                  border:     on ? `1px solid rgba(201,168,124,0.48)` : '1px solid rgba(255,255,255,0.07)',
                  color:      on ? GOLD : 'rgba(255,255,255,0.25)',
                }}
              >
                {s.label}
              </button>
            )
          })}
        </div>

        {/* Play / Pause */}
        <button
          onClick={onTogglePlay}
          className="flex items-center justify-center transition-all duration-200 hover:scale-108 active:scale-95"
          style={{
            width: 50, height: 50,
            borderRadius: '50%',
            background: `linear-gradient(135deg, #B9816F, ${GOLD})`,
            boxShadow: `0 8px 28px rgba(185,129,111,0.40)`,
            border: 'none',
            flexShrink: 0,
          }}
        >
          {playback.isPlaying ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.95)">
              <rect x="6" y="4" width="4" height="16" rx="1.5" />
              <rect x="14" y="4" width="4" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.95)" style={{ transform: 'translateX(1.5px)' }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Audio toggle */}
        <button
          onClick={onToggleAudio}
          className="flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            width: 38, height: 38,
            borderRadius: '50%',
            background: audioOn ? GOLD_DIM : 'rgba(255,255,255,0.04)',
            border:     audioOn ? `1px solid rgba(201,168,124,0.42)` : '1px solid rgba(255,255,255,0.07)',
            color:      audioOn ? GOLD : 'rgba(255,255,255,0.22)',
          }}
        >
          {audioOn ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Loop / time info row ── */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <span className="text-[0.50rem] tracking-[0.24em] uppercase font-mono whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.16)' }}>
          Loop {String(playback.loopCount + 1).padStart(3, '0')} · {playback.currentTime.toFixed(2)}s / 8.00s
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
      </div>

    </div>
  )
}
