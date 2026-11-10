import { useEffect, useRef } from 'react'
import MagneticLink from './MagneticLink'
import { profile } from '../data/content'

// Pop-up with the details of the selected project.
// Uses the native <dialog> element, so Esc and focus trapping work for free.
export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (project && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden' // stop the page scrolling behind
    }
  }, [project])

  const handleClose = () => {
    document.documentElement.style.overflow = ''
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="pd-t"
      onClose={handleClose}
      onClick={(e) => {
        // clicking the dark backdrop closes it
        if (e.target === dialogRef.current) dialogRef.current.close()
      }}
    >
      <button
        className="btn ghost close"
        type="button"
        aria-label="Close project details"
        onClick={() => dialogRef.current.close()}
      >
        Close
      </button>

      {project && (
        <>
          <img
            className="pdimg"
            src={project.image}
            alt={project.alt}
            width={project.width}
            height={project.height}
          />
          <p className="eyebrow">{project.category}</p>
          <h3 id="pd-t">{project.title}</h3>
          <p>{project.summary}</p>
          <MagneticLink href={profile.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </MagneticLink>
        </>
      )}
    </dialog>
  )
}
