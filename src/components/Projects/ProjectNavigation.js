import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.ProjectData = this.props.ProjectData
    }

    render() {
        return(
            <ul>
                {this.ProjectData.map((project)=>{
                    return(
                        <Link to={project.gh_link} 
                        style={{textDecoration:"inherit"}}>
                            <li>{project.title}</li>
                        </Link>
                    )
                })}
            </ul>
        )

    }
}
export default Navigation