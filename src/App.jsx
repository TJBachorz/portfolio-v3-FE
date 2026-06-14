import './styles/global.css'
import Nav from './components/Nav/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ padding: '2rem', color: 'white' }}>
        <p className="section-label">layout skeleton</p>
      </main>
    </>
  )
}
