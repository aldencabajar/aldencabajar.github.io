import HoverImage from "components/Projects/ProjectHover"
import Navigation from  "components/SideNavigation"
import React, {useRef, useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'css/projects.css';
import { graphql } from "gatsby";
import ProjectHeader from 'components/utils/header'; 
import Layout from 'components/layout';
import { getImage } from "gatsby-plugin-image"




function ProjectCell(props) {

  const project = props.project
  const image = getImage(project.image)

  //rename tag key to id due to limitations in using gatsby-transformer-json 
  props.project['id'] = props.project['tag']

  return(
  <div className="proj-cell">
      <span id={props.project.id}> &nbsp; </span>
      <div className="body">
          <h3 ref={props.inputRef}>{project.title}</h3>
          <h5>{project.sub}</h5>
          <p>{project.description}</p>
      {
        <HoverImage image={image} gh={project.gh_link} 
        blog_link={project.post} id={project.id}/>
      }
      </div>
  </div>
  )
}

const Projects=({data})=>{
    const h3elems = useRef([])
    const isBrowser = ((typeof window !== 'undefined') || (typeof document !== 'undefined'))
    const initPos =  isBrowser ? document.documentElement.scrollTop : null
    const [Dims, SetDims] = useState([])
    const [pageYOffset, SetOffset] = useState(initPos)
    const ScrollEventHandler=()=>{
        const top = isBrowser ? window.pageYOffset || document.documentElement.scrollTop : null
        SetOffset(top)
    }
    const projectData = data.allProjectsDataJson.nodes

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
            {projectData.map((data, index) => {
              return(
                <ProjectCell project={data} 
                inputRef={(el)=>h3elems.current[index]=el} />
              )
            })}
          </div>
          <Navigation className='side-nav' data={projectData}
          header={'Contents'} cellOffset={Dims}
          pageYOffset={pageYOffset} route={"/Projects"} />
        </div>
      </div>
    </Layout>
    )
    
}


export default Projects;

export const query = graphql`
  query projectsImageQuery {
  allProjectsDataJson {
    nodes {
      description
      gh_link
      post
      tag 
      title
      image {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED, 
            layout: CONSTRAINED,
            transformOptions: {fit: FILL}
          )
        }
      }
    }
  }
}

`