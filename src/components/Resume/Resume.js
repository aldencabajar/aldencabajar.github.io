import React from "react";
import "../../css/Resume.css"
import WorkExpData from "../../data/WorkExperience.json"
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";


const Resume=()=>{
    return(
        <div className="section-body">
            <header className="section-header">
                <h1>Resume</h1>
                <h3>My current professional experience.</h3>
            </header>
            <WorkExperience data={WorkExpData}/>
            <Skills />

        </div>
    )
}
export default Resume