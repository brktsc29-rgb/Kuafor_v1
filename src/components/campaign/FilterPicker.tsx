import type { CinematicFilter } from '../../types'

interface FilterDef {
  id: CinematicFilter
  label: string
  symbol: string
  swatch: string   // small colour preview
}

const FILTERS: FilterDef[] = [
  { id: 'natural',           label: 'Natural',    symbol: '○', swatch: 'rgba(255,255,255,0.18)' },
  { id: 'champagne-bloom',   label: 'Champagne',  symbol: '✦', swatch: 'rgba(255,220,120,0.55)' },
  { id: 'blush-romance',     label: 'Blush',      symbol: '❀', swatch: 'rgba(255,160,180,0.55)' },
  { id: 'classic-editorial', label: 'Editorial',  symbol: '▣', swatch: 'rgba(140,130,160,0.55)' },
  { id: 'golden-hour',       label: 'Golden',     symbol: '◎', swatch: 'rgba(255,148,44,0.55)'  },
]

interface Props {
  active: CinematicFilter
  onChange: (f: CinematicFilter) => void
}

export default function FilterPicker({ active, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-[0.52rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif', color: '#3A2820' }}>
        Light Tint
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map(f => {
          const on = active === f.id
          return (
            <button
              key={f.id}
              onClick={() => onChange(f.id)}
              className="flex items-center gap-1.5 rounded-full transition-all duration-220 hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.58rem',
                letterSpacing: '0.09em',
                padding: '5px 12px 5px 8px',
                background: on ? 'rgba(201,168,124,0.16)' : 'rgba(255,255,255,0.04)',
                border:     on ? '1px solid rgba(201,168,124,0.44)' : '1px solid rgba(255,255,255,0.07)',
                color:      on ? '#C9A87C' : 'rgba(255,255,255,0.26)',
                cursor: 'pointer',
              }}
            >
              {/* Colour swatch dot */}
              <span
                style={{
                  display: 'inline-block',
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: f.swatch,
                  border: on ? '1px solid rgba(201,168,124,0.6)' : '1px solid rgba(255,255,255,0.15)',
                  flexShrink: 0,
                }}
              />
              {f.symbol} {f.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
