import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Claudio Poblete Lagos. Todos los derechos reservados.</p>
      <div className='social-icons'>
        <a href='https://github.com/claudio-poblete' target='_blank' rel='noopener noreferrer' className='icon'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a href='https://www.linkedin.com/in/claudio-poblete-lagos/' target='_blank' rel='noopener noreferrer' className='icon'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
