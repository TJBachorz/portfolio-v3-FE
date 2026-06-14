import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>TJ Bachorz</span>
      {' · Built with React + Vite · Deployed on Firebase'}
    </footer>
  )
}
