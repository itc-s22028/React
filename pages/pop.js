import styles from 'styles/pop.module.css'

export default function Web () {
  return (
    <ul className={styles.pop_btn}>
      <li>
        <h2 href="/">Home</h2>
      </li>
      <li>
        <h2 href="/">About</h2>
      </li>
      <li>
        <h2 href="/">Topics</h2>
      </li>
      <li>
        <h2 href="/">Link</h2>
      </li>
    </ul>
  )
}
