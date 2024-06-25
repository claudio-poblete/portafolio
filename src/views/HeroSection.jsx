import miImagen from '../assets/images/yo.jpg'
import '../styles/HeroSection/herosection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id='home' className='hero__section-container'>
      <div className='hero__section-main'>
        <div className='section__main-titles'>
          <h4>¡Hola! Mi nombre es</h4>
          <h2>Claudio <span>Poblete</span></h2>
          <h3><span>Desarollador</span> Full Stack</h3>
        </div>
        <div className='section__main-buttons'>
          <Link to='/project' className='primary__button'>
            Mis Proyectos
          </Link>
          <Link to='/contact' className='secondary__button'>
            Contacto
          </Link>
        </div>
      </div>
      <div className='hero__section-img'>
        <img src={miImagen} alt='Imagen-Ejemplo' />
      </div>
    </section>
  )
}

export default HeroSection
