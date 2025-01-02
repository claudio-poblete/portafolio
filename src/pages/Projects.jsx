import Cards from "../components/Cards"
import { proyectos } from "../data/projectData"
import '../assets/styles/pages/Projects.css'

const Projects = () => {
  return(
    <section className="projects-section">
      <header className="section-header">
        <h2 className="section-title">
          Mis Proyectos
        </h2>
      </header>
      <main className="projects-container">
        <ul className="projects-list">
          {proyectos.map((proyecto) => (
            <Cards key={proyecto.id} 
              img={proyecto.img}
              title={proyecto.title}
              description={proyecto.description}
              skills={proyecto.skills}
              url={proyecto.url}
            />
          ))}
        </ul>
      </main>
    </section>
  )
}

export default Projects