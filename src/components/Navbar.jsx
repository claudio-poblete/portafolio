import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <Link to='/' className='logo' aria-label='Ir a la página de inicio'>
          Claudio Poblete
        </Link>
      </div>
      <button
        className='hamburger-menu'
        onClick={toggleMenu}
        aria-label='Abrir o cerrar el menú de navegación'
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
      <ul className={`links-container ${menuOpen ? 'show-menu' : ''}`}>
        <li>
          <Link to='/' className='links'>Inicio</Link>
        </li>
        <li>
          <Link to='/about' className='links'>Sobre Mi</Link>
        </li>
        <li>
          <Link to='/projects' className='links'>Mis Proyectos</Link>
        </li>
        <li>
          <Link to='/contact' className='links'>Contáctame</Link>
        </li>
        <li className='cv-button-container'>
          <a href='/docs/CV Claudio Poblete - Dev Fullstack.pdf' className='link-cv' target='_blank' rel='noopener noreferrer'>
            Mi CV
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
