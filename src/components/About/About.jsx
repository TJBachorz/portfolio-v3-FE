import { motion } from 'framer-motion'
import headshot from '../../assets/tj-cropped.jpg'
import styles from './About.module.css'

const SKILLS = [
  'JavaScript', 'React', 'React Native', 'Node.js',
  'Python', 'Django', 'Java', 'Spring Boot',
  'PostgreSQL', 'AWS', 'Firebase', 'HTML · CSS',
]

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="section-label">about</p>
        <div className={styles.grid}>
          <div>
            <p className={styles.bio}>
              I'm <strong>Thomas Bachorz</strong> — though everyone calls me TJ.
              I'm a full-stack developer based in Denver, CO, and I enjoy building
              software that feels good to use — paying equal attention to clean
              architecture and polished interfaces. I've shipped React and React
              Native apps, Python/Django APIs, Spring Boot services, and everything
              in between.
            </p>
            <p className={styles.skillsLabel}>Technologies</p>
            <div className={styles.skills}>
              {SKILLS.map(skill => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles.photoWrap}>
            <img src={headshot} alt="TJ Bachorz" className={styles.photo} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
