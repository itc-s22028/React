import styles from 'styles/naname.module.css'
import Document, { body, div, h1, p } from 'next/document';

export default function Menu() {
  return (
    <body className={styles.body}>
      <div className={styles.box}>
        <h1>COMING SOON</h1>
        <p>NEW WEBSITE IS AVAILABLE <br />ON 20XX.01.01</p>
      </div>
    </body>
  )
}
