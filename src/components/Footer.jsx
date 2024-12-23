import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-content'>
        <nav className='footer-social-links'>
          <h5>Mis redes</h5>
          <div className='social-links-container'>
            <a
              href='https://www.linkedin.com/in/claudio-poblete-lagos'
              target='_blank' rel='noopener noreferrer'
              className='social-link'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
              Linkedin
            </a>
            <a
              href='https://github.com/claudio-poblete'
              target='_blank' rel='noopener noreferrer'
              className='social-link'
            >
              <FontAwesomeIcon icon={faGithub} size='2x' />
              Github
            </a>
            <a href='mailto:pobleteclaudio2103@gmail.com' className='social-link'>
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
              Email
            </a>
            <a
              href='https://wa.me/56995221320'
              target='_blank' rel='noopener noreferrer'
              className='social-link'
            >
              <FontAwesomeIcon icon={faWhatsapp} size='2x' />
              Whatsapp
            </a>
          </div>
        </nav>
        <div className='footer-personal-info'>
          <p>Claudio Poblete Lagos</p>
          <p>Transformando ideas en soluciones tecnológicas.</p>
          <p>Hablemos de tu próximo proyecto.</p>
        </div>

      </section>
      <section className='footer-rights'>
        <p className='footer-rights-text'>© 2024. Todos los derechos reservados.</p>
        <p>Diseñado y desarrollado por <a href='https://github.com/claudio-poblete' target='_blank' rel='noopener noreferrer' className='footer-credit-link'>Claudio Poblete Lagos</a>.</p>
      </section>
    </footer>
  )
}

export default Footer
