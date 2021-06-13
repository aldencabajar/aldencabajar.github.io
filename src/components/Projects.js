import "../App.css";
import data from "../data/ProjectsData.json"
import "../css/projects.css"


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
                    <img src ={process.env.PUBLIC_URL + project.image} alt='tmp'/>
                }
            </div>

        </>
    )
} 

function Projects() {
    return (
        <div className="section-body">
            <header className ="section-header">
                <h1> Projects </h1>
                <h3>Been doing this and that.</h3>
            </header>
            { data.map((project) => {
                return(ProjectCell(project))
            })}
        </div>

    )
}

export default Projects;