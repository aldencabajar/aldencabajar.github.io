import data from "../../data/ProjectsData.json"
import HoverImage from "./ProjectHover"
import Navigation from  "./ProjectNavigation"
import '../../css/projects.css'


const ProjectCell = (project) => {

    return(
        <>
            <div className="proj-cell">
                <div className="body">
                    <h3>{ project.title}</h3>
                    <h5>{project.sub}</h5>
                    <p>{project.description}</p>
                </div>
                {project.image !== "" &&
                    <HoverImage image={project.image} gh={project.gh_link} 
                    blog_link={project.blog_link}/>}
            </div>

        </>
    )
} 

const Projects=()=> {
    return (
        <div className="section-body">
            <header className ="section-header">
                <h1> Projects </h1>
                <h3>Been doing this and that.</h3>
            </header>
            <div className="project-container">
                <div className="project-cell-container">
                    { data.map((project) => {
                        return(ProjectCell(project))
                    })}
                </div>
                <div className="project-nav">
                    <header>
                        <h3>Contents</h3>
                    </header>
                    <Navigation ProjectData={data}/>
                </div>
            </div>
        </div>

    )
}

export default Projects;