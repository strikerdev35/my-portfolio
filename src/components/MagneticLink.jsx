import { useEffect, useRef } from 'react'
import { useMotion } from '../hooks/useMotion'

// A red pill link that leans slightly toward the mouse (mouse devices only).
export default function MagneticLink({ className = '', children, ...props }) {
  const ref = useRef(null)
  const { motionOn } = useMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !motionOn) return
    if (!window.matchMedia || !window.matchMedia('(pointer:fine)').matches) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.25
      const y = (e.clientY - r.top - r.height / 2) * 0.25
      el.style.translate = `${x}px ${y}px`
    }
    const onLeave = () => {
      el.style.translate = ''
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.translate = ''
    }
  }, [motionOn])

  return (
    <a ref={ref} className={`btn solid ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
