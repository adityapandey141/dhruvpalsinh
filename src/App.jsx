import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Achievements from './components/Achievements'
import About from './components/About'
import Expertise from './components/Expertise'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Approach />
      <Achievements />
      <About />
      <Expertise />
      <Contact />
    </div>
  )
}

export default App
