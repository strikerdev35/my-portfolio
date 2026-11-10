import KineticHeading from './KineticHeading'
import { projects, timeline } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-h">
      <div className="wrap">
        <p className="eyebrow">03 / The journey</p>
        <KineticHeading id="journey-h" first="Keep building." second="Keep learning." />
        <div className="split">
          <div className="tl">
            {timeline.map((item) => (
              <div key={item.title}>
                <span className="yr">{item.when}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="built">
            <h3>Built so far</h3>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
