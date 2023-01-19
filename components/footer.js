import styles from 'styles/footer.module.css'
import Home from 'components/home'

export default function Footer() {
  return(
    <footer>
      <Home />
      <p className={styles.text}>Fukuchi Ryo</p>
    </footer>
  )
}
