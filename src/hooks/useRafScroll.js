import { useEffect } from 'react'

// Runs `callback` on scroll and resize, at most once per animation frame.
// Pass a callback wrapped in useCallback so it only changes when it should.
export default function useRafScroll(callback) {
  useEffect(() => {
    let ticking = false
    const run = () => {
      ticking = false
      callback()
    }
    const onEvent = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(run)
      }
    }
    window.addEventListener('scroll', onEvent, { passive: true })
    window.addEventListener('resize', onEvent)
    callback()
    return () => {
      window.removeEventListener('scroll', onEvent)
      window.removeEventListener('resize', onEvent)
    }
  }, [callback])
}
