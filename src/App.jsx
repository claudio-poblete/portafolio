import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './pages/HeroSection'
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
