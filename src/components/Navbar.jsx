import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <Link to='/' className='logo' aria-label='Ir a la página de inicio'>
          Claudio Poblete
        </Link>
      </div>
      <ul className='links-container'>
        <li>
          <Link to='/' className='links' aria-label='Ir a la página de inicio'>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='/about' className='links' aria-label='Ir a la sección sobre mí'>
            Sobre Mi
          </Link>
        </li>
        <li>
          <Link to='/projects' className='links' aria-label='Ver mis proyectos'>
            Mis Proyectos
          </Link>
        </li>
        <li>
          <Link to='/contact' className='links' aria-label='Ir a la sección de contacto'>
            Contáctame
          </Link>
        </li>
        <li>
          <a href='./docs/cv.pdf' className='link-cv' target='_blank' rel='noopener noreferrer' aria-label='Descargar mi CV'>
            Mi CV
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
