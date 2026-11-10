import { useCallback, useRef } from 'react'
import { useMotion } from '../hooks/useMotion'
import useRafScroll from '../hooks/useRafScroll'

// Thin red bar at the top of the page that fills as you scroll.
export default function ScrollProgress() {
  const ref = useRef(null)
  const { motionOn } = useMotion()

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (!motionOn) {
      el.style.display = 'none'
      return
    }
    const max = document.documentElement.scrollHeight - window.innerHeight
    el.style.display = 'block'
    el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  }, [motionOn])

  useRafScroll(update)

  return <div id="prog" ref={ref} aria-hidden="true" />
}
