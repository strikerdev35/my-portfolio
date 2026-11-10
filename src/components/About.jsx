import KineticHeading from './KineticHeading'
import { profile, skills } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="wrap">
        <p className="eyebrow">02 / Behind the craft</p>
        <KineticHeading id="about-h" first="More than code." second="Making data useful." />
        <div className="split">
          <div>
            <p>
              I’m a data analyst and developer based in New Delhi. I work across analysis,
              machine learning and the web, and I’m looking for data analysis roles.
            </p>
            <p>My toolkit covers the full path from raw data to a finished dashboard or app.</p>
            <ul className="skills" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="redcard">
            <p>From raw data to clear answers and working apps.</p>
            <span className="sig">{profile.name}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
