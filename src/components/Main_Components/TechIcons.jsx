import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faCss3, faReact, faGitSquare, faSass } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faDatabase, faGears, faLaptopCode, faMobileScreenButton, faTerminal } from '@fortawesome/free-solid-svg-icons'
import '../../styles/MainSection-Styles/TechIcons.css'

const TechIcons = () => {
  const techs = [
    { id: uuidv4(), icon: faHtml5, name: 'HTML' },
    { id: uuidv4(), icon: faCss3, name: 'CSS' },
    { id: uuidv4(), icon: faReact, name: 'React' },
    { id: uuidv4(), icon: faJsSquare, name: 'JavaScript' },
    { id: uuidv4(), icon: faGitSquare, name: 'Git' },
    { id: uuidv4(), icon: faGithub, name: 'GitHub' }
  ]

  const tools = [
    { id: uuidv4(), icon: faDatabase, name: 'Database' },
    { id: uuidv4(), icon: faGears, name: 'REST API' },
    { id: uuidv4(), icon: faLaptopCode, name: 'VS Code' },
    { id: uuidv4(), icon: faSass, name: 'Sass' },
    { id: uuidv4(), icon: faMobileScreenButton, name: 'Responsivo' },
    { id: uuidv4(), icon: faTerminal, name: 'Terminal' }
  ]

  return (
    <>
      <div className='skills__tech-container'>
        {techs.map(tech => (
          <div key={tech.id} className='skill__tech'>
            <FontAwesomeIcon icon={tech.icon} size='3x' className='icons' />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
      <div className='skills__tool-container'>
        {tools.map(tool => (
          <div key={tool.id} className='skill__tool'>
            <FontAwesomeIcon icon={tool.icon} size='3x' className='icons' />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TechIcons
