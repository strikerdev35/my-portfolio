import useInView from '../hooks/useInView'

// Section title whose lines slide up when it scrolls into view.
// `second` (optional) is the red second line.
export default function KineticHeading({ id, first, second }) {
  const [ref, inView] = useInView(0.4)

  return (
    <h2 id={id} ref={ref} className={`kin${inView ? ' in' : ''}`}>
      <span className="ln">
        <span>{first}</span>
      </span>
      {second && (
        <span className="ln">
          <span className="red">{second}</span>
        </span>
      )}
    </h2>
  )
}
