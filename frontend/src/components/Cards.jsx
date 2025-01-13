/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/components/Cards.css'

const Cards = ( {img, title, description, skills, url}) => {
  const skillIcons = {
    HTML: faHtml5,
    CSS: faCss3Alt,
    Javascript: faJs,
    React: faReact,
    NodeJS: faNodeJs,
    PostgreSQL: faDatabase,
    Express: faServer
  }

  return(
    <li className="card-container">
      <div className="card-img-container">
        <img src={img} alt="Imagen del proyecto" className="card-img"/>
      </div>
      <div className="card-info-container">
        <h3 className="card-title">
          {title}
        </h3>
        <p className="card-description">
          {description}
        </p>
        <div className="skills-container">
          <h5 className="skills-title">Tecnologias utilizadas:</h5>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill">
                {skillIcons[skill] ? (
                  <FontAwesomeIcon icon={skillIcons[skill]} className="skill-icon" />
                ) : (
                  <FontAwesomeIcon icon={faCode} className="skill-icon" />
                )}{' '}
                 {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="card-button-container">
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-button">
          Ver proyecto
        </a>
      </div>
    </li>
  )
}

export default Cards