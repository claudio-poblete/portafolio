import '../styles/MainSection-Styles/AboutMe.css'
import TechIcons from '../components/Main_Components/TechIcons'
import imagenEjemplo from '../assets/images/ejemplo-imagen.jpg'

export const AboutMe = () => {
  return (
    <section className='about__main-container'>
      <div className='about__section-title'>
        <h2>Sobre Mi</h2>
      </div>
      <div className='about__section-container'>
        <article className='about__info-section'>
          <div className='gap-1'>
            <div className='about__info-title'>
              <h3 className='about__title'>¿Quién soy?</h3>
            </div>
            <div className='about__info-para'>
              <p>¡Hola! Soy Claudio Poblete Lagos, un apasionado Analista Programador y futuro Desarrollador Full Stack. Aunque aún no tengo experiencia profesional, me encuentro inmerso en varios proyectos independientes que me permiten explorar mi pasión por la programación. Desde que descubrí el mundo del desarrollo web, he encontrado en él una fuente inagotable de aprendizaje y creatividad. Soy autodidacta, aprendo rápido y me considero responsable y dedicado.</p>
              <p>Soy egresado de Inacap como Analista Programador, y actualmente estoy ampliando mis habilidades en el bootcamp de Desafío Latam en la carrera de Desarrollador Full Stack JS. Uno de mis logros más recientes fue aprender Front End en menos de seis meses, lo cual me ha inspirado a seguir creciendo en este campo.</p>
              <p>Fuera del mundo del desarrollo, disfruto de la lectura, ver series, escuchar música variada y visitar bares para disfrutar de buena comida. Me guío en mi trabajo por la honestidad y el compromiso, valores que considero fundamentales en cualquier proyecto en el que me involucre.</p>
            </div>
          </div>
          <div>
            <div className='about__img'>
              <img src={imagenEjemplo} alt='Claudio Poblete' />
            </div>
          </div>
        </article>
        <article className='about__skills-section'>
          <div>
            <div className='about__skills-title'>
              <h3 className='about__title'>Mis Habilidades / Tecnologías</h3>
            </div>
            <div className='about__skills-container'>
              <TechIcons />
            </div>
          </div>
          <div className='about__education-container'>
            <div className='about__education-title'>
              <h3 className='about__title'>Educación</h3>
            </div>
            <div className='education__container'>
              <div className='education'>
                <h4>Analista Programador</h4>
                <h5>Inacap, Santiago</h5>
                <h5>Marzo 2017 - Noviembre 2018</h5>
                <p>Durante este programa, adquirí habilidades fundamentales en programación y desarrollo de software. Aprendí a diseñar, codificar y mantener aplicaciones utilizando diversos lenguajes y herramientas tecnológicas. Desarrollé competencias en análisis de sistemas, lógica de programación y resolución de problemas informáticos, lo que me permitió comprender y optimizar procesos de desarrollo de software.</p>
              </div>
              <div className='education'>
                <h4>Desarrollador Full Stack</h4>
                <h5>Academia Desafío Latam, Santiago</h5>
                <h5>Diciembre 2023 - Noviembre 2024</h5>
                <p>En este curso, estoy perfeccionando mis habilidades como desarrollador full stack, con un enfoque en JavaScript. Estoy aprendiendo a manejar tanto el front end como el back end de aplicaciones web, utilizando tecnologías modernas como React y Node.js. Además, estoy adquiriendo conocimientos en bases de datos, control de versiones y metodologías ágiles, lo que me capacita para desarrollar aplicaciones completas y robustas desde cero.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutMe
