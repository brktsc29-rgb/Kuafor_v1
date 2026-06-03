import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  life: number; maxLife: number
  size: number
  r: number; g: number; b: number
  isSparkle: boolean
}

const W = 405
const H = 720

function mkAmbient(): Particle {
  return {
    x: Math.random() * W,
    y: H + 4,
    vx: (Math.random() - 0.5) * 0.55,
    vy: -(Math.random() * 1.1 + 0.35),
    life: 0,
    maxLife: Math.floor(Math.random() * 210 + 110),
    size: Math.random() * 2.4 + 0.4,
    r: 255,
    g: Math.floor(215 + Math.random() * 40),
    b: Math.floor(140 + Math.random() * 90),
    isSparkle: false,
  }
}

function mkSparkle(cx: number, cy: number, angle: number): Particle {
  const speed = Math.random() * 5.5 + 1.8
  return {
    x: cx, y: cy,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 1.2,
    life: 0,
    maxLife: Math.floor(Math.random() * 55 + 32),
    size: Math.random() * 4.5 + 1.2,
    r: 255,
    g: Math.floor(230 + Math.random() * 25),
    b: Math.floor(165 + Math.random() * 75),
    isSparkle: true,
  }
}

interface Props {
  onSparkle: () => void
  isPlaying: boolean
}

export default function ParticleCanvas({ onSparkle, isPlaying }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const pRef       = useRef<Particle[]>([])
  const rafRef     = useRef<number>(0)
  const frameRef   = useRef(0)
  const playRef    = useRef(isPlaying)
  playRef.current  = isPlaying

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw)
      frameRef.current++

      ctx.clearRect(0, 0, W, H)

      // Spawn ambient dust
      if (playRef.current && frameRef.current % 20 === 0 && pRef.current.filter(p => !p.isSparkle).length < 40) {
        pRef.current.push(mkAmbient())
      }

      pRef.current = pRef.current.filter(p => {
        p.life++
        p.x  += p.vx
        p.y  += p.vy
        p.vy += p.isSparkle ? 0.08 : 0.012  // gravity

        const prog  = p.life / p.maxLife
        const alpha = prog < 0.15
          ? prog / 0.15
          : 1 - Math.pow((prog - 0.15) / 0.85, 1.4)
        if (alpha <= 0) return false

        const sz = Math.max(0.1, p.size * (1 - prog * 0.42))

        ctx.save()
        ctx.globalAlpha  = alpha * (p.isSparkle ? 0.92 : 0.72)
        ctx.shadowBlur   = sz * (p.isSparkle ? 10 : 6)
        ctx.shadowColor  = `rgba(${p.r},${p.g},${p.b},0.85)`
        ctx.fillStyle    = `rgba(${p.r},${p.g},${p.b},1)`

        // Sparkles get a cross / star shape
        if (p.isSparkle && sz > 2) {
          const arm = sz * 1.6
          ctx.beginPath()
          ctx.moveTo(p.x - arm, p.y)
          ctx.lineTo(p.x + arm, p.y)
          ctx.moveTo(p.x, p.y - arm)
          ctx.lineTo(p.x, p.y + arm)
          ctx.strokeStyle = `rgba(${p.r},${p.g},${p.b},${alpha * 0.7})`
          ctx.lineWidth   = sz * 0.35
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, sz, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        return p.life < p.maxLife
      })
    }

    draw()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect   = canvas.getBoundingClientRect()
    const sx     = canvas.width  / rect.width
    const sy     = canvas.height / rect.height
    const cx     = (e.clientX - rect.left) * sx
    const cy     = (e.clientY - rect.top)  * sy

    const COUNT = 16
    for (let i = 0; i < COUNT; i++) {
      pRef.current.push(mkSparkle(cx, cy, (i / COUNT) * Math.PI * 2))
    }
    onSparkle()
  }, [onSparkle])

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      onClick={handleClick}
      className="absolute inset-0 w-full h-full z-10"
      style={{ cursor: 'crosshair' }}
    />
  )
}
