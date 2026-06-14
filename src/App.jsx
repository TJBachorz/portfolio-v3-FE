import './styles/global.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
