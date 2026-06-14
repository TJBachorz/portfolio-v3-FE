import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import looksyImg from '../../assets/looksy-1.gif'

const PROJECTS = [
  {
    name: 'Looksy',
    featured: true,
    image: looksyImg,
    imageAspect: 'portrait',
    description:
      'An augmented reality home-decorating app. Upload any image and it\'s processed into an interactive 3D model viewable in any mobile browser via Google\'s model-viewer — no app install required. Uses a dual-backend architecture: a Rails API for JWT-authenticated user data and a Node/Express service with AWS S3 for image upload and URL management.',
    tags: ['React', 'Ruby on Rails', 'Node.js', 'AWS S3', 'Google model-viewer', 'PostgreSQL'],
    links: [
      // { label: 'Demo ↗', href: 'YOUR_YOUTUBE_URL' },
      { label: 'Frontend', href: 'https://github.com/TJBachorz/looksy-FE' },
      { label: 'Rails API', href: 'https://github.com/TJBachorz/looksy-BE' },
      { label: 'Node/AWS API', href: 'https://github.com/TJBachorz/looksy-file-uploader' },
    ],
  },
  {
    name: 'Epic Beer Run',
    featured: false,
    image: 'https://media.giphy.com/media/xdlQcTOqbTpq53xy8c/giphy.gif',
    description:
      'A road trip planner for craft beer lovers. Map out your next brewery vacation with a TOPOJSON-rendered interactive map, drag-and-drop route building, and live BreweryDB API data — all powered by React and Ruby on Rails.',
    tags: ['React', 'Ruby on Rails', 'TOPOJSON', 'PostgreSQL'],
    links: [
      // { label: 'Live Demo ↗', href: 'YOUR_BEER_RUN_DEMO_URL' },
      { label: 'Frontend', href: 'YOUR_BEER_RUN_FRONTEND_GITHUB_URL' },
      { label: 'Backend', href: 'YOUR_BEER_RUN_BACKEND_GITHUB_URL' },
    ],
  },
  {
    name: 'ABC Data Logger',
    featured: false,
    image: 'https://media1.giphy.com/media/5Imt9DlRz1vnJTM8P0/giphy.gif',
    imageAspect: 'portrait',
    description:
      'A mobile app for behavioral therapists. Records antecedent-behavior-consequence chains with JWT authentication and client data graphing. Built with React Native and TypeScript on the frontend, backed by a RESTful Python/Django API.',
    tags: ['React Native', 'TypeScript', 'Python', 'Django', 'PostgreSQL'],
    links: [
      // { label: 'Demo ↗', href: 'YOUR_ABC_LOOM_URL' },
      { label: 'Frontend', href: 'https://github.com/TJBachorz/ABC-Data-Logger-FE' },
      { label: 'Backend', href: 'https://github.com/TJBachorz/ABC-Data-Logger-BE' },
    ],
  },
  {
    name: 'Outdoor.sy',
    featured: false,
    description:
      'A full-stack customer intake system with a custom file parser that ingests raw .txt files into a structured PostgreSQL database via validated CRUD endpoints. Features a dynamic, sortable table UI for browsing records by name or vehicle type, with backend validations enforcing data integrity.',
    tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
    links: [
      { label: 'Frontend', href: 'https://github.com/TJBachorz/odsy-customer-intake-webapp' },
      { label: 'Backend', href: 'https://github.com/TJBachorz/odsy-customer-intake-api' },
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
