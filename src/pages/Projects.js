import data from "data/ProjectsData.json"
import HoverImage from "components/Projects/ProjectHover"
import Navigation from  "components/SideNavigation"
import React, {useRef, useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'css/projects.css';
import ProjectHeader from 'components/utils/header'; 
import Layout from 'components/layout';



class ProjectCell extends React.Component {
    constructor(props) {
        super(props)
        this.project = this.props.project
    }
    render() {
        return(
        <div className="proj-cell">
            <span id={this.project.id}> &nbsp; </span>
            <div className="body">
                <h3 ref={this.props.inputRef}>{this.project.title}</h3>
                <h5>{this.project.sub}</h5>
                <p>{this.project.description}</p>
            {
            this.project.image !== "" &&
                <HoverImage image={this.project.image} gh={this.project.gh_link} 
                blog_link={this.project.post} id={this.project.id}/>
            }
            </div>
        </div>
        )

    }

}



const Projects=()=>{
    const h3elems = useRef([])
    const isBrowser = ((typeof window !== 'undefined') || (typeof document !== 'undefined'))
    const initPos =  isBrowser ? document.documentElement.scrollTop : null
    const [Dims, SetDims] = useState([])
    const [pageYOffset, SetOffset] = useState(initPos)
    const ScrollEventHandler=()=>{
        const top = isBrowser ? window.pageYOffset || document.documentElement.scrollTop : null
        SetOffset(top)
    }

    const UpdateElemDims=(elements, yoffset)=>{
        SetDims(elements.map((elem)=>{
            const node = ReactDOM.findDOMNode(elem)
            const {top} = node.getBoundingClientRect()
            return (top + yoffset)
        }))
    }

    useEffect(()=>{
        let elems = h3elems.current
        UpdateElemDims(elems, pageYOffset)
        const resizeEventHandler=()=>{
            // const foo = ReactDOM.findDOMNode(h3elems.current[1])
            let elems = h3elems.current
            UpdateElemDims(elems, pageYOffset)
        } 
        if (isBrowser) {
            window.addEventListener("scroll", ScrollEventHandler)
            window.addEventListener("resize", resizeEventHandler)

        }
        return()=>{
            if (isBrowser) {
                window.removeEventListener("Scroll", ScrollEventHandler)
                window.removeEventListener("resize", resizeEventHandler)
                
            }
        }
    }, [pageYOffset])

    return (
        <Layout>
            <div className="section-body">
                <ProjectHeader title={'Projects'} subtitle={'Been doing this and that.'}/>
               
                <div className="project-container">
                    <div className="project-cell-container">
                        { data.map((project, index) => {
                            return(
                                <ProjectCell project={project} 
                                inputRef={
                                    (element)=>{
                                        h3elems.current[index]=element
                                    }}/>
                            )
                        })}
                    </div>
                    <Navigation className='side-nav' data={data}
                    header={'Contents'} cellOffset={Dims}
                    pageYOffset={pageYOffset} route={"/Projects"} />
                </div>
            </div>
        </Layout>
    )
    
}


export default Projects;