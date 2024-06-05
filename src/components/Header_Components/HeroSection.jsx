import imagenEjemplo from '../../assets/images/ejemplo-imagen.jpg'
import '../../styles/Header-Styles/HeroSection.css'

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
          <a href='#project' className='primary__button'>Mis Proyectos</a>
          <a href='#contact' className='secondary__button'>Contacto</a>
        </div>
      </div>
      <div className='hero__section-img'>
        <img src={imagenEjemplo} alt='Imagen-Ejemplo' />
      </div>
    </section>
  )
}

export default HeroSection
