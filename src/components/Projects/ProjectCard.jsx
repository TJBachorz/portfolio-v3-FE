import { motion } from 'framer-motion'
import styles from './Projects.module.css'

export default function ProjectCard({ name, description, tags, links, featured = false }) {
  return (
    <motion.div
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {featured && <span className={styles.badge}>Featured</span>}
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.tags}>
        {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
      </div>
      <div className={styles.links}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
