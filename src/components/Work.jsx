import { useLayoutEffect, useRef, useState } from 'react'
import KineticHeading from './KineticHeading'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import { projects } from '../data/content'

// "All" plus one filter per project category
const categories = [...new Set(projects.map((p) => p.category))]
const filters = [
  { value: 'all', label: 'All' },
  ...categories.map((c) => ({ value: c, label: c })),
]

export default function Work() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const tabRefs = useRef({})
  const openerRef = useRef(null) // the card that opened the dialog, so focus can return to it

  // Slide the red underline under the active filter
  useLayoutEffect(() => {
    const move = () => {
      const el = tabRefs.current[filter]
      if (el) setUnderline({ left: el.offsetLeft, width: el.offsetWidth })
    }
    move()
    window.addEventListener('resize', move)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(move)
    return () => window.removeEventListener('resize', move)
  }, [filter])

  const openProject = (project, cardEl) => {
    openerRef.current = cardEl
    setSelected(project)
  }

  const closeProject = () => {
    setSelected(null)
    if (openerRef.current) openerRef.current.focus()
  }

  return (
    <section id="work" aria-labelledby="work-h">
      <div className="wrap">
        <p className="eyebrow">01 / Selected work</p>
        <KineticHeading id="work-h" first="Work that speaks." />

        <div className="tabs" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.value}
              ref={(el) => {
                tabRefs.current[f.value] = el
              }}
              className="btn ghost"
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
          <span
            className="ul"
            aria-hidden="true"
            style={{ left: underline.left, width: underline.width }}
          />
        </div>

        <div className="work">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              hidden={filter !== 'all' && project.category !== filter}
              onOpen={openProject}
            />
          ))}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={closeProject} />
    </section>
  )
}
