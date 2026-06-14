import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>TJ</span>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
