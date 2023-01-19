import Link from 'next/link'
import styles from 'styles/navi.module.css'

export default function Navi () {
  return (
    <ul className={styles.nav}>
      <li><Link href="/">TOP</Link></li>
      <li><Link href="/">ABOUT</Link></li>
      <li><Link href="/">NEWS</Link></li>
      <li><Link href="/">LINK</Link></li>
    </ul>
  )
}
