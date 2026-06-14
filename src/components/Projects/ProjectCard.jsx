import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '../Lightbox/Lightbox'
import styles from './Projects.module.css'

export default function ProjectCard({ name, description, tags, links, featured = false, image = null, imageAspect = 'landscape' }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <motion.div
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <>
          <div
            className={`${styles.cardImage} ${imageAspect === 'portrait' ? styles.cardImagePortrait : ''}`}
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: 'zoom-in' }}
          >
            <img
              src={image}
              alt={`${name} preview`}
              className={`${styles.cardImg} ${imageAspect === 'portrait' ? styles.cardImgPortrait : styles.cardImgLandscape}`}
            />
            <div className={styles.cardImageOverlay} />
          </div>
          {createPortal(
            <AnimatePresence>
              {lightboxOpen && (
                <Lightbox
                  src={image}
                  alt={`${name} preview`}
                  onClose={() => setLightboxOpen(false)}
                />
              )}
            </AnimatePresence>,
            document.body
          )}
        </>
      )}
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
