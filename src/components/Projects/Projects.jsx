import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    name: 'Looksy',
    featured: true,
    description:
      'A 3D augmented reality profile picture viewer. Users upload photos which are processed and rendered as AR models viewable through any mobile browser — no app install required. Built across three services coordinated via JWT auth.',
    tags: ['AR', 'Node.js', 'Ruby on Rails', 'AWS S3', 'Google model-viewer', 'PostgreSQL'],
    links: [
      { label: 'Demo ↗', href: 'YOUR_YOUTUBE_URL' },
      { label: 'Frontend', href: 'YOUR_LOOKSY_FRONTEND_GITHUB_URL' },
      { label: 'Rails API', href: 'YOUR_LOOKSY_RAILS_GITHUB_URL' },
      { label: 'Node/AWS API', href: 'YOUR_LOOKSY_NODE_GITHUB_URL' },
    ],
  },
  {
    name: 'Epic Beer Run',
    featured: false,
    description:
      'An interactive US brewery map. Drag breweries onto a personal list, filter by state, and explore via a TOPOJSON-rendered SVG map. Integrates the BreweryDB API with a Rails backend.',
    tags: ['React', 'Ruby on Rails', 'TOPOJSON', 'PostgreSQL'],
    links: [
      { label: 'Live Demo ↗', href: 'YOUR_BEER_RUN_DEMO_URL' },
      { label: 'Frontend', href: 'YOUR_BEER_RUN_FRONTEND_GITHUB_URL' },
      { label: 'Backend', href: 'YOUR_BEER_RUN_BACKEND_GITHUB_URL' },
    ],
  },
  {
    name: 'ABC Data Logger',
    featured: false,
    description:
      'A mobile app for behavioral data collection. Records antecedent-behavior-consequence chains for therapists and researchers, with a Django REST API backend.',
    tags: ['React Native', 'Python', 'Django', 'PostgreSQL'],
    links: [
      { label: 'Demo ↗', href: 'YOUR_ABC_LOOM_URL' },
      { label: 'Frontend', href: 'YOUR_ABC_FRONTEND_GITHUB_URL' },
      { label: 'Backend', href: 'YOUR_ABC_BACKEND_GITHUB_URL' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="work">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="section-label">work</p>
        <div className={styles.grid}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
