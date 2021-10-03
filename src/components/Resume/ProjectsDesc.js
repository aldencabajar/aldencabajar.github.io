import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ProjectsDesc extends React.Component {
    constructor(props) {
        super(props)
        this.desc = this.props.desc
        this.title = this.props.title
        this.id = this.props.id
    }
    
    render () {
        return(
            <Accordion>
                <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={this.id}
                className="accd-summary-proj"
                >
                {this.title}
                </AccordionSummary>
                <AccordionDetails className="accd-details-proj"> {this.desc} </AccordionDetails>
            </Accordion>
        )
    }
}

export default ProjectsDesc