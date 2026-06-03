const TRACK = 'HÜLYA · HAIR & BEAUTY · ISTANBUL · SAÇ TASARIMI · KERATİN · OMBRE · RÖFLE · GELİN SAÇI · MAKYAJ · PREMIUM STUDIO · '

export default function AwardsMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden select-none"
      style={{
        background: reverse ? '#EFE5DF' : '#C98F7A',
        borderTop:    `1px solid ${reverse ? 'rgba(42,33,29,0.10)' : 'rgba(42,33,29,0.08)'}`,
        borderBottom: `1px solid ${reverse ? 'rgba(42,33,29,0.10)' : 'rgba(42,33,29,0.08)'}`,
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
              color: reverse ? '#C98F7A' : '#F8F5F2',
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
