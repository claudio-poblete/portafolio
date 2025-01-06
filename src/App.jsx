import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './pages/HeroSection'
import About from './pages/About'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/main.css'

function App () {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
