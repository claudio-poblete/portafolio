import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faGit
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faServer,
  faKey,
  faToolbox
} from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/About.css'

const About = () => {
  return (
    <section className='about-section'>
      <header className='about-header'>
        <h2 className='about-title'>Sobre Mi</h2>
      </header>
      <article className='about-main-info'>
        <header className='about-subheader'>
          <h3 className='about-subtitle'>¿Quién soy?</h3>
        </header>
        <div className='about-description'>
          <p className='about-paragraph'>
            Soy un desarrollador apasionado por la tecnología y la creación de soluciones digitales. Mi enfoque principal está en el desarrollo web, donde combino creatividad y habilidades técnicas para construir aplicaciones funcionales y estéticamente atractivas.
          </p>
          <p className='about-paragraph'>
            Mi experiencia incluye trabajar con tecnologías como HTML, CSS, JavaScript, React, y Node.js. Además, tengo un sólido conocimiento en bases de datos relacionales como PostgreSQL y en la implementación de sistemas de autenticación con JWT.
          </p>
          <p className='about-paragraph'>
            Más allá del código, disfruto aprender continuamente y explorar nuevas herramientas que puedan mejorar mis proyectos. Creo firmemente en la importancia de escribir código limpio y eficiente, y en colaborar con equipos para lograr metas comunes.
          </p>
          <p className='about-paragraph'>
            En mi tiempo libre, me gusta leer sobre innovación tecnológica y participar en comunidades de desarrollo. Siempre estoy en busca de nuevos retos que me permitan crecer profesionalmente y aportar valor a cada proyecto en el que participo.
          </p>

        </div>
      </article>
      <article className='about-skills'>
        <header className='about-subheader'>
          <h3 className='about-subtitle'>Stack Tecnológico</h3>
        </header>
        <div className='skills-container'>
          <ul className='skills-list'>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faHtml5} className='skill-icon' /> HTML
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faCss3Alt} className='skill-icon' /> CSS
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faJs} className='skill-icon' /> JavaScript
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faReact} className='skill-icon' /> React
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faBootstrap} className='skill-icon' /> Bootstrap
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faToolbox} className='skill-icon' /> Vite JS
            </li>
          </ul>
          <ul className='skills-list'>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faNodeJs} className='skill-icon' /> Node.js
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faServer} className='skill-icon' /> Express
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faDatabase} className='skill-icon' /> PostgreSQL
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faServer} className='skill-icon' /> RestAPI
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faKey} className='skill-icon' /> JWT
            </li>
            <li className='skill-item'>
              <FontAwesomeIcon icon={faGit} className='skill-icon' /> Git
            </li>
          </ul>
        </div>
      </article>
      <article className='about-education'>
        <header className='about-subheader'>
          <h3 className='about-subtitle'>Estudios</h3>
        </header>
        <div className='education-list'>
          <div className='education-item'>
            <h4 className='education-title'>Desarrollador Fullstack</h4>
            <p className='education-place'>Academia Desafío Latam</p>
            <p className='education-date'>Nov 2023 - Dic 2024</p>
            <p className='education-description'>Durante este programa intensivo, me he especializado en el desarrollo de aplicaciones web tanto en el frontend como en el backend. He adquirido un conocimiento profundo de tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y bases de datos SQL y NoSQL. Además, he aprendido a crear aplicaciones escalables y seguras, integrando APIs y gestionando la autenticación de usuarios.</p>
            <p className='education-description'>A lo largo del curso, he trabajado en proyectos prácticos que simulan escenarios reales de desarrollo, lo que me ha permitido mejorar mis habilidades técnicas, aprender buenas prácticas de programación y trabajar de manera colaborativa en equipos ágiles. Este estudio me ha proporcionado una base sólida para desarrollar soluciones completas y funcionales, desde la interfaz de usuario hasta la base de datos.
            </p>
          </div>
        </div>
      </article>
      <figure className='about-image-container'>
        <img
          src=''
          alt='Imagen representativa del autor'
          className='about-image'
        />
        <figcaption className='about-image-caption'>
          Esta imagen me representa.
        </figcaption>
      </figure>
    </section>
  )
}

export default About
