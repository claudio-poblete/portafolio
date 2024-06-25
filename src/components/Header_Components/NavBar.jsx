import '../../styles/Header-Styles/NavBar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <Link to='/' className='navbar__logo'>
          Logo
        </Link>
      </div>
      <ul className='navbar__list-container'>
        <Link to='/' className='navbar__list-link'>
          Inicio
        </Link>
        <Link to='/aboutme' className='navbar__list-link'>
          Sobre Mi
        </Link>
        <Link to='/project' className='navbar__list-link'>
          Proyectos
        </Link>
        <Link to='/contact' className='navbar__list-link'>
          Contacto
        </Link>
        <Link to='/curriculum' id='CV' className='navbar__list-link'>
          Ver Cv
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
