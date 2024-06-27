import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import HeroSection from './views/HeroSection'
import AboutMe from './views/AboutMe'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HeroSection />}
        />
        <Route
          path='/aboutme'
          element={<AboutMe />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
