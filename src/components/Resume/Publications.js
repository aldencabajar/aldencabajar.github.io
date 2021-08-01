import PublicationData from "../../data/PublicationData.json"
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import Link from '@material-ui/core/Link'


const APAStyleBib=(PubData)=>{
    // constructs APA style bibliographies from json 
    return(
        <div>
            <span style={{fontWeight:"lighter"}}> {PubData.authors.join(", ")} </span>
            <span style={{fontWeight:"normal"}}> {PubData.title + "."} </span>
            <span style={{fontStyle:"italic"}}>{PubData.journal + ", "}</span>
            <span style={{fontStyle:"italic"}}>
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

const Publications=()=>{
    // console.log(APAStyleBib(PublicationData[2]))
    return(
        <div className="resume-content" id="publications">
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

export default Publications
