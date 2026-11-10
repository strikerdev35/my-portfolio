import { createContext, useContext, useLayoutEffect, useState } from 'react'

// Shares the "Motion: on / off" switch with every component.
// The choice is remembered in localStorage; the first visit follows the
// visitor's "reduce motion" system setting.

const KEY = 'deep-baidya-portfolio-motion'
const MotionContext = createContext({ motionOn: true, toggleMotion: () => {} })

function getInitialMotion() {
  let saved = null
  try {
    saved = localStorage.getItem(KEY)
  } catch (e) {
    /* storage can be blocked, ignore */
  }
  const reduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return saved ? saved === 'on' : !reduced
}

export function MotionProvider({ children }) {
  const [motionOn, setMotionOn] = useState(getInitialMotion)

  // The CSS switches animations off through this class on <body>
  useLayoutEffect(() => {
    document.body.classList.toggle('nomotion', !motionOn)
  }, [motionOn])

  const toggleMotion = () => {
    const next = !motionOn
    setMotionOn(next)
    try {
      localStorage.setItem(KEY, next ? 'on' : 'off')
    } catch (e) {
      /* ignore */
    }
  }

  return (
    <MotionContext.Provider value={{ motionOn, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

export const useMotion = () => useContext(MotionContext)
