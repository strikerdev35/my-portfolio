import KineticHeading from './KineticHeading'
import { skills } from '../data/content'

export default function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-h">
      <div className="wrap">
        <p className="eyebrow">My toolkit</p>
        <KineticHeading id="tools-h" first="Built with tools" second="I trust." />
        <ul className="tools-row">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
