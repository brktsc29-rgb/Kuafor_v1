const TRACK = 'HÜLYA · HAIR & BEAUTY · ISTANBUL · SAÇ TASARIMI · KERATİN · OMBRE · RÖFLE · GELİN SAÇI · MAKYAJ · PREMIUM STUDIO · '

export default function AwardsMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden select-none"
      style={{
        background: reverse ? '#0A0806' : '#B9816F',
        borderTop:    '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marqueeScroll${reverse ? 'Rev' : ''} 32s linear infinite`,
          willChange: 'transform',
        }}
      >
        {[0, 1, 2, 3].map(i => (
          <span
            key={i}
            style={{
              fontFamily: 'Instrument Serif, serif',
              color: reverse ? '#B9816F' : '#0A0806',
              fontSize: 'clamp(0.82rem, 1.4vw, 1.05rem)',
              letterSpacing: '0.07em',
              whiteSpace: 'nowrap',
              paddingRight: 0,
            }}
          >
            {TRACK}
          </span>
        ))}
      </div>
    </div>
  )
}
