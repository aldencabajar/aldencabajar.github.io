import PublicationData from "data/PublicationData.json"
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import Link from '@material-ui/core/Link'
import ResumeBase from "./ResumeBase";
import React from 'react';


const APAStyleBib=(PubData)=>{
    // constructs APA style bibliographies from json 
    return(
        <div>
            <span style={{fontWeight:"lighter"}}> {PubData.authors.join(", ")} </span>
            <span style={{fontWeight:"normal"}}> {PubData.title + "."} </span>
            <span style={{fontStyle:"italic", fontWeight:"lighter"}}>
                <span>{PubData.journal + ", "}</span>
                {PubData.vol
                + (PubData.issue == null ? "" : " ("+ PubData.issue + ")")
                + (PubData.pages == null ? "" : "," + PubData.pages)
                + "."
                }
            </span>
            {
                PubData.doi == null ? ""
                : <Link href={PubData.doi}> 
                <InsertLinkIcon style={
                    {position: 'relative', 
                    top: '5px', 
                    left: '5px',
                    color: '#432c3c'}
                }/> 
                </Link>
            }
        </div>
    )


} 

export default class Publications extends ResumeBase {
    render() {
        return(
            <div className="resume-content" id='publications' ref={this.divRef}>
                <span className="resume-content resume-content-span"> &nbsp; </span>
                <div className="resume-header">
                    <h3>Publications</h3>
                </div>
                <ul style={{listStyle:"none"}}>
                    {PublicationData.map((data)=>{
                        return(<li>{APAStyleBib(data)}</li>)
                    })}
                </ul>
            </div>
        )

    }
}
