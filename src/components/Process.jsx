import { useCallback, useRef } from 'react'
import KineticHeading from './KineticHeading'
import { useMotion } from '../hooks/useMotion'
import useRafScroll from '../hooks/useRafScroll'
import { clamp } from '../utils'
import { processSteps, processBars } from '../data/content'

export default function Process() {
  const panelRef = useRef(null)
  const { motionOn } = useMotion()

  // The chart panel slides in from the right and its bars grow as you scroll
  const slideIn = useCallback(() => {
    const panel = panelRef.current
    if (!panel) return
    if (!motionOn) {
      panel.style.translate = ''
      panel.style.opacity = ''
      panel.style.setProperty('--p', 1)
      return
    }
    const rect = panel.getBoundingClientRect()
    const p = clamp((window.innerHeight - rect.top) / (window.innerHeight * 0.85))
    panel.style.translate = `${(1 - p) * window.innerWidth * 0.3}px 0`
    panel.style.opacity = 0.2 + p * 0.8
    panel.style.setProperty('--p', p)
  }, [motionOn])

  useRafScroll(slideIn)

  return (
    <section id="process" aria-labelledby="process-h">
      <div className="wrap">
        <p className="eyebrow">How I approach data</p>
        <KineticHeading id="process-h" first="From data." second="To decisions." />
        <div className="split">
          <ol className="steps">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="n">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="panel" ref={panelRef}>
            <div className="bars" aria-hidden="true">
              {processBars.map((h, i) => (
                <i key={i} style={{ '--h': `${h}%` }}></i>
              ))}
            </div>
            <figcaption>Illustration: from raw data to a clear decision</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
