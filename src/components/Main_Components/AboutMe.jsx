import '../../styles/MainSection-Styles/AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faCss3, faReact, faGitSquare, faSass } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faDatabase, faGears, faLaptopCode, faMobileScreenButton, faTerminal } from '@fortawesome/free-solid-svg-icons'

export const AboutMe = () => {
  return (
    <section id='aboutme' className='about__main-container'>
      <div className='about__section-title'>
        <h2>Sobre Mi</h2>
      </div>
      <div className='about__section-container'>
        <article className='about__info-section'>
          <div className='about__info-title'>
            <h3>¿Quién soy?</h3>
          </div>
          <div className='about__info-para'>
            <p>¡Hola! Soy Claudio Poblete Lagos, un apasionado Analista Programador y futuro Desarrollador Full Stack. Aunque aún no tengo experiencia profesional, me encuentro inmerso en varios proyectos independientes que me permiten explorar mi pasión por la programación. Desde que descubrí el mundo del desarrollo web, he encontrado en él una fuente inagotable de aprendizaje y creatividad. Soy autodidacta, aprendo rápido y me considero responsable y dedicado.</p>
            <p>Soy egresado de Inacap como Analista Programador, y actualmente estoy ampliando mis habilidades en el bootcamp de Desafío Latam en la carrera de Desarrollador Full Stack JS. Uno de mis logros más recientes fue aprender Front End en menos de seis meses, lo cual me ha inspirado a seguir creciendo en este campo.</p>
            <p>Fuera del mundo del desarrollo, disfruto de la lectura, ver series, escuchar música variada y visitar bares para disfrutar de buena comida. Me guío en mi trabajo por la honestidad y el compromiso, valores que considero fundamentales en cualquier proyecto en el que me involucre.</p>
          </div>
        </article>
        <article className='about__skills-section'>
          <div className='about__skills-title'>
            <h3>Mis Habilidades / Tecnologías</h3>
          </div>
          <div className='about__skills-container'>
            <div className='skills__tech-container'>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faHtml5} size='4x' />
                <p>HTML</p>
              </div>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faCss3} size='4x' />
                <p>CSS</p>
              </div>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faJsSquare} size='4x' />
                <p>JavaScript</p>
              </div>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faReact} size='4x' />
                <p>React</p>
              </div>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faDatabase} size='4x' />
                <p>SQL / MySQL</p>
              </div>
              <div className='skill__tech'>
                <FontAwesomeIcon icon={faGears} size='4x' />
                <p>RESTful  Apis</p>
              </div>
            </div>
            <div className='skills__tool-container'>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faMobileScreenButton} size='4x' />
                <p>Diseño Reponsivo</p>
              </div>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faGithub} size='4x' />
                <p>GitHub</p>
              </div>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faLaptopCode} size='4x' />
                <p>Visual Studio Code</p>
              </div>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faGitSquare} size='4x' />
                <p>Git</p>
              </div>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faTerminal} size='4x' />
                <p>Terminal de Comandos</p>
              </div>
              <div className='skill__tool'>
                <FontAwesomeIcon icon={faSass} size='4x' />
                <p>Sass</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutMe
