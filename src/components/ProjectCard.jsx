import useInView from '../hooks/useInView'

// One project tile. Fades in when scrolled into view; click or Enter opens details.
export default function ProjectCard({ project, index, hidden, onOpen }) {
  const [ref, inView] = useInView(0.15)

  const open = () => onOpen(project, ref.current)
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }

  return (
    <div
      ref={ref}
      className={`card${inView ? ' in' : ''}`}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      hidden={hidden}
      style={inView ? { transitionDelay: `${index * 100}ms,${index * 100}ms,0ms` } : undefined}
      onClick={open}
      onKeyDown={onKeyDown}
    >
      <img
        className="thumb"
        src={project.image}
        width={project.width}
        height={project.height}
        alt={project.alt}
        loading="lazy"
        decoding="async"
      />
      <span className="tag">
        <b>{project.number}</b>
        {project.category}
      </span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span className="go">View details</span>
    </div>
  )
}
