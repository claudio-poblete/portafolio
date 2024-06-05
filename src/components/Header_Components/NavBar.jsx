import '../../styles/Header-Styles/NavBar.css'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Función para manejar el scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='navbar__logo-container'>
        <h1 className='navbar__logo'>Logo</h1>
      </div>
      <ul className='navbar__list-container'>
        <li className='navbar__list'>
          <a href='#home' className='navbar__list-link'>Inicio</a>
        </li>
        <li className='navbar__list'>
          <a href='#aboutme' className='navbar__list-link'>Sobre Mi</a>
        </li>
        <li className='navbar__list'>
          <a href='#project' className='navbar__list-link'>Proyectos</a>
        </li>
        <li className='navbar__list'>
          <a href='#contact' className='navbar__list-link'>Contacto</a>
        </li>
        <li className='navbar__list'>
          <a href='#CV' id='CV' className='navbar__list-link'>Descargar CV</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
