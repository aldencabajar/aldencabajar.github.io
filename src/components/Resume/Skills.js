import React from "react";
import SkillsData from "../../data/Skills.json";
import { Bar } from "react-chartjs-2";


const PuOrRGBRaw =[
    "252,141,89",
    "153,153,153",
    "145,191,219",
]
const rgbaFormat=(colorArr, alpha)=>{
    return(
        colorArr.map((rgb)=>{
            return(`rgba(${rgb}, ${alpha})`)
        })
    )

}
const PuORRGBA = rgbaFormat(PuOrRGBRaw,1)
const SkillBarGroup=(props)=>{
    const options={
        indexAxis: "y",
        responsive: true,
        plugins:{
            legend: {
                display: false
            },
        },
       scales:{
           x: {
              min: 0,
              max: 5,
            }
        }

    }
    const kv = Object.entries(props.skillSet)
    const data={
        labels: kv.map((x)=>{return(x[0])}),
        datasets: [
            {
            label: props.groupName,
            data: kv.map((x)=>{return(x[1])}),
            backgroundColor: props.Color,
            borderColor: props.Color,
            borderWidth: 1,
            },
        ]
    }

    return(
        <div className="skill-group" id={props.groupName}>
            <h4>{props.groupName}</h4>
            <Bar data={data} options={options} />
        </div>
    )

}


class Skills extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inView: false,
            // reDraw: false

        }
    }
    isComponentInView=()=>{
        const elem = document.querySelector("#skills-display")
        var docViewTop = window.pageYOffset || document.documentElement.scrollTop
        var docViewBottom = docViewTop + window.innerHeight;
    
        const {top, height} = elem.getBoundingClientRect()
        var elemTop = top + docViewTop
        var elemBottom = elemTop + height;
        var inView = (elemTop <= docViewBottom) && (elemBottom >= docViewTop)
        if (!this.state.inView && inView) {
            this.setState({inView: inView})
        } 
        else if (this.state.inView && !inView) {
            this.setState({inView : inView})
        } 

    }

    componentDidMount() {
        this.isComponentInView()
        window.addEventListener("scroll", this.isComponentInView)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.isComponentInView)
    }

    render() {
        return(
            <div className="resume-content" id="skills-display">
                <div className="resume-header">
                    <h3>Professional Skills</h3>
                </div>
                <div className ="skill-group-container">
                    {SkillsData.map(
                        (items, el)=>{return(
                        <SkillBarGroup groupName={items.group} 
                        skillSet={items.skills} Color={PuORRGBA[el]}
                       />
                        )}
                    )}
                    {/* add a dummy container to make it equal rows and cols */}
                    <div className="skill-group" id="dummy"></div>
                </div>

            </div>
        )
    }
}

export default Skills
