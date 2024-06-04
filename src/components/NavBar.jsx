import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='navbar__logo-container'>
        <h1 className='navbar__logo'>Claudio Poblete</h1>
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
