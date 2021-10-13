import React, {useEffect, useState} from "react";
import "css/Resume.css";
import WorkExpData from "data/WorkExperience.json"
import WorkExperience from "components/Resume/WorkExperience";
import Skills from "components/Resume/Skills";
import Publications from "components/Resume/Publications";
import Navigation from "components/SideNavigation";
import Layout from 'components/layout';
import ProjectHeader from 'components/utils/header';


const Resume=()=>{
    const isBrowser = ((typeof window !== 'undefined') || (typeof document !== 'undefined'))
    const initPos =  isBrowser ? document.documentElement.scrollTop : null
    const [cellOffset, setCellOffset] = useState([0, 0, 0])
    const [pageYOffset, SetOffset] = useState(initPos)

    const navData = [
        {title: "Work Experience", id: "workExperience"},
        {title: "Skills", id: "skills-display"},
        {title: "Publications", id: "publications"}
    ] 

    useEffect(()=>{
            const onScroll=(e) =>{
                const pos = isBrowser ? window.pageYOffset || document.documentElement.scrollTop : null
                SetOffset(pos)
            }
        if (isBrowser) window.addEventListener("scroll", onScroll)
        return ()=>{
            if (isBrowser) {
                window.removeEventListener("scroll", onScroll) 
            } 
        }
        // console.log(cellOffset)
    }, [])
    
    return(
        <Layout>
            <div className="section-body">
                <ProjectHeader title={'Resume'}
                subtitle={'My professional experience'} />
                <div id="resume-all">
                    <div id="resume-main">
                        <WorkExperience data={WorkExpData} handleState={setCellOffset} order={0}/>
                        <Skills handleState={setCellOffset} order={1} />
                        <Publications handleState={setCellOffset} order={2}/>
                    </div>
                    <Navigation header={'Contents'} data={navData} 
                    cellOffset={cellOffset} pageYOffset={pageYOffset} 
                    route={"/Resume"} className='side-nav side-nav-resume' />
                </div>
            </div>
        </Layout>


    )
}
export default Resume