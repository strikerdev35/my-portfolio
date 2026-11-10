import { useEffect, useRef } from 'react'
import { useMotion } from '../hooks/useMotion'

// Decorative arrows that chase the mouse across the whole page.
export default function SwarmCanvas() {
  const canvasRef = useRef(null)
  const { motionOn } = useMotion()
  const motionRef = useRef(motionOn)

  // lets the animation loop read the latest value without restarting
  useEffect(() => {
    motionRef.current = motionOn
  }, [motionOn])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let raf = 0
    let pointer = null
    const wander = { x: 0, y: 0, t: 0 } // random target used when the mouse is idle

    const size = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    size()

    const agents = Array.from({ length: 26 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: 0,
      vy: 0,
      o: 40 + Math.random() * 60,
      k: i % 3 ? '#f2efeb' : '#e32b3c',
    }))

    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY, t: performance.now() }
    }
    window.addEventListener('resize', size)
    window.addEventListener('pointermove', onMove, { passive: true })

    const frame = (now) => {
      raf = requestAnimationFrame(frame)
      if (!motionRef.current || document.hidden) return
      ctx.clearRect(0, 0, W, H)

      const goal = pointer && now - pointer.t < 3000 ? pointer : wander
      if (goal === wander && now > wander.t) {
        wander.x = Math.random() * W
        wander.y = Math.random() * H
        wander.t = now + 2500
      }

      agents.forEach((a, i) => {
        const dx = goal.x - a.x + Math.cos(now / 700 + i) * a.o
        const dy = goal.y - a.y + Math.sin(now / 600 + i * 2) * a.o
        const d = Math.hypot(dx, dy) || 1
        a.vx += (dx / d) * 0.35
        a.vy += (dy / d) * 0.35

        const speed = Math.hypot(a.vx, a.vy)
        const max = d < 120 ? 2.2 : 5
        if (speed > max) {
          a.vx *= max / speed
          a.vy *= max / speed
        }
        a.vx *= 0.97
        a.vy *= 0.97
        a.x += a.vx
        a.y += a.vy

        ctx.save()
        ctx.translate(a.x, a.y)
        ctx.rotate(Math.atan2(a.vy, a.vx))
        ctx.fillStyle = a.k
        ctx.beginPath()
        ctx.moveTo(7, 0)
        ctx.lineTo(-5, 4.5)
        ctx.lineTo(-3, 0)
        ctx.lineTo(-5, -4.5)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      })
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas
      id="swarm"
      ref={canvasRef}
      aria-hidden="true"
      style={{ display: motionOn ? 'block' : 'none' }}
    />
  )
}
