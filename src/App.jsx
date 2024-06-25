import { Routes, Route } from 'react-router-dom'
import Header from './views/Header'
import HeroSection from './views/HeroSection'
import AboutMe from './views/AboutMe'

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
    </>
  )
}

export default App
