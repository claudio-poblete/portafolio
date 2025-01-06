import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './pages/HeroSection'
import About from './pages/About'
<<<<<<< HEAD:src/App.jsx
=======
import Contact from './pages/Contact'
>>>>>>> ab88cd834c9ffc8820111a9ec73133f11a88bfdc:frontend/src/App.jsx
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
<<<<<<< HEAD:src/App.jsx
            <Route path='/projects' element={<Projects />} />
=======
            <Route path='/project' element={<Projects />}/>
            <Route path='/contact' element={<Contact />} />
>>>>>>> ab88cd834c9ffc8820111a9ec73133f11a88bfdc:frontend/src/App.jsx
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
