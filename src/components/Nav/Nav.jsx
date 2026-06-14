import clickSrc from '../../assets/click.mp3'
import { useSound } from '../../hooks/useSound'
import styles from './Nav.module.css'

export default function Nav() {
  const { play, muted, toggle } = useSound(clickSrc)

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>TJ</span>
      <ul className={styles.links}>
        <li><a href="#about" onClick={play}>About</a></li>
        <li><a href="#work" onClick={play}>Work</a></li>
        <li><a href="#contact" onClick={play}>Contact</a></li>
      </ul>
      <button
        className={styles.soundToggle}
        onClick={toggle}
        aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </nav>
  )
}
