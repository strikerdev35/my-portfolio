import KineticHeading from './KineticHeading'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <p className="eyebrow">04 / Next project</p>
        <KineticHeading id="contact-h" first="Let’s build" second="together." />
        <p>Got a data problem or an app idea? Let’s make something useful.</p>
        <ul className="contact-list">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <span>
                <small>GitHub</small>
                {profile.githubHandle}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <div className="row">
              <span>
                <small>Location</small>
                {profile.location}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
