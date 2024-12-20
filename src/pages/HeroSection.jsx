import { Link } from 'react-router-dom'
import '../assets/styles/HeroSection.css'

const HeroSection = () => {
  return (
    <section className='hero-section' lang='es'>
      <header className='hero-container'>
        <div className='hero-info'>
          <p className='hero-up-title'>¡Hola! mi nombre es</p>
          <h1 className='hero-title'>
            Claudio Poblete
          </h1>
          <p className='hero-subtitle'><span>Desarrollador</span> Fullstack</p>
        </div>
        <div className='hero-buttons'>
          <Link to='/contact' className='primary-button' aria-label='Ir a la página de contacto'>
            Contáctame
          </Link>
          <Link to='/projects' className='secondary-button' aria-label='Ver mis proyectos'>
            Mis Proyectos
          </Link>
        </div>
      </header>
      <main className='img-container'>
        <img src='/path-to-image.jpg' alt='Claudio Poblete trabajando en un proyecto' />
      </main>
    </section>
  )
}

export default HeroSection
