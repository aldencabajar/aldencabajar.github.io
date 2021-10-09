import React from "react";
import ProjectsDesc from "./ProjectsDesc.js";
import ResumeBase from "./ResumeBase";

class WorkExperience extends ResumeBase {
    constructor(props){
        super(props)
        this.data = this.props.data
    }

    DerivePrefixId=(stri, num)=>{
        return( (stri + num.toString()).toLowerCase().replace(" ", "-") )
    }

    UnravelData=(data)=>{
        return(
        data.map((doc)=>{
            return(
            <div className="work-exp-cell">
                <header>
                    <h3>{doc.job_title}</h3>
                    <p style={{'fontSize': '2vmin'}}>{doc.timeline}</p>
                    <p style={{'fontWeight': 'lighter'}}>{doc.company}</p>
                    <h4>{doc.description}</h4>
                </header>
                <div className="work-exp-content">
                    <ul className="work-exp-content list">
                        {doc.projects.map((proj, i)=>{
                            return(
                            typeof proj.description == "undefined" ? 
                            <li>{proj.title}</li> : 
                            <ProjectsDesc title={proj.title}
                            desc={proj.description}
                            id={this.DerivePrefixId(doc.job_title, i)}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
            )
        })
        )

    }

    render() {
        return(
            <div className="resume-content" ref={this.divRef}>
                <span className="resume-content resume-content-span" id='workExperience'>&nbsp;</span>
                <div className="resume-header">
                    <h3>Work Experience</h3>
                </div>
                {this.UnravelData(this.data)}
            </div>
        )
    }

}
export default WorkExperience

