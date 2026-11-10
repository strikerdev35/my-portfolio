import { useCallback, useLayoutEffect, useRef } from 'react'
import portrait from '../assets/portrait.webp'
import MagneticLink from './MagneticLink'
import { useMotion } from '../hooks/useMotion'
import useRafScroll from '../hooks/useRafScroll'
import { clamp } from '../utils'
import { profile } from '../data/content'

const GIANT_LETTERS = 'PORTFOLIO'.split('')

export default function Hero() {
  const giantRef = useRef(null)
  const portraitRef = useRef(null)
  const { motionOn } = useMotion()

  // Shrink the giant "PORTFOLIO" text if it is wider than its box
  useLayoutEffect(() => {
    const g = giantRef.current
    const fit = () => {
      g.style.fontSize = ''
      const base = parseFloat(getComputedStyle(g).fontSize)
      const w = g.clientWidth
      let total = 0
      Array.from(g.children).forEach((c) => {
        total += c.getBoundingClientRect().width
      })
      if (total > w * 0.98) g.style.fontSize = `${(base * w * 0.98) / total}px`
    }
    fit()
    window.addEventListener('resize', fit)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  // Parallax: the big text drifts up and fades, the portrait moves slower
  const parallax = useCallback(() => {
    const g = giantRef.current
    const p = portraitRef.current
    if (!g || !p) return
    if (!motionOn) {
      g.style.translate = ''
      g.style.opacity = ''
      p.style.translate = ''
      return
    }
    const y = window.scrollY
    const progress = clamp(y / window.innerHeight)
    g.style.translate = `0 ${-y * 0.3}px`
    g.style.opacity = 1 - progress * 0.85
    p.style.translate = `0 ${y * 0.12}px`
  }, [motionOn])

  useRafScroll(parallax)

  return (
    <div className="wrap hero">
      <div className="stage">
        <div className="giant" ref={giantRef} aria-hidden="true">
          {GIANT_LETTERS.map((letter, i) => (
            <span key={i} style={{ '--i': i }}>
              {letter}
            </span>
          ))}
        </div>

        <p className="hello rise d2">Hello, I’m</p>
        <h1 aria-label={profile.name}>
          <span className="rise d3">Deep Narayan</span>
          <span className="l2 rise d3">
            Baidya<i className="sq" aria-hidden="true"></i>
          </span>
        </h1>
        <p className="role rise d3">
          Data Analyst &amp;
          <br />
          Developer
        </p>

        <img
          className="portrait rise d3"
          ref={portraitRef}
          src={portrait}
          width="760"
          height="893"
          alt="Portrait of Deep Narayan Baidya in a grey blazer and black shirt"
          fetchPriority="high"
          decoding="async"
        />

        <p className="intro rise d3">
          Turning data into decisions. Building AI/ML and web projects.
          <br />
          I’m an MCA student at Galgotias University, working with Python, SQL, Excel and
          Power BI.
        </p>

        <div className="cta rise d4">
          <MagneticLink className="sq-btn" href="#work">
            See my work{' '}
            <span className="ar" aria-hidden="true">
              ↓
            </span>
          </MagneticLink>
        </div>

        <p className="loc rise d4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#e32b3c" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.500a2.5 2.5 0 0 1 0 5z" />
          </svg>{' '}
          {profile.location}
        </p>

        <aside className="stats rise d4" aria-label="Highlights">
          <p className="tagline">
            Every dataset.
            <br />A decision.
          </p>
          <dl>
            <div>
              <dt>3</dt>
              <dd>Projects built</dd>
            </div>
            <div>
              <dt>7</dt>
              <dd>Core skills</dd>
            </div>
            <div>
              <dt>2</dt>
              <dd>Degrees: BCA, MCA</dd>
            </div>
          </dl>
        </aside>

        <a className="feat rise d4" href="#work">
          <span className="play" aria-hidden="true">
            ▶
          </span>
          <b>View featured build</b>
          <small>AI / ML</small>
        </a>
        <a className="cue rise d4" href="#work">
          Scroll to discover <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  )
}
