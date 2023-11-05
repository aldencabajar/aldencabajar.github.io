import React from "react";
import ProjectsDesc from "./ProjectsDesc.js";
import ResumeBase from "./ResumeBase";
import Paper from "@material-ui/core/Paper";

class WorkExperience extends ResumeBase {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  derivePrefixId = (stri, num) => {
    return (stri + num.toString()).toLowerCase().replace(" ", "-");
  };

  unravelData = (data) => {
    return data.map((doc) => {
      return (
        <div className="work-exp-cell">
          <header>
            <h3>{doc.job_title}</h3>
            <h4 id="date">{doc.timeline}</h4>
            <h4 id="company">{doc.company}</h4>
          </header>
          <p className="work-exp-cell-description">{doc.description}</p>
          <div className="work-exp-content">
            <ul className="work-exp-content list">
              {doc.projects.map((proj, i) => {
                return typeof proj.description == "undefined" ? (
                  <Paper className="work-desc-card">
                    <li>{proj.title}</li>
                  </Paper>
                ) : (
                  <ProjectsDesc
                    title={proj.title}
                    desc={proj.description}
                    id={this.derivePrefixId(doc.job_title, i)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="resume-content" ref={this.divRef}>
        <span
          className="resume-content resume-content-span"
          id="workExperience"
        >
          &nbsp;
        </span>
        <div style={this.state.headerStyle} className="resume-header">
          <h3>Work Experience</h3>
        </div>
        {this.unravelData(this.data)}
      </div>
    );
  }
}
export default WorkExperience;
