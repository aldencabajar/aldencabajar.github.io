import React, {useEffect} from "react";
import SkillsData from "data/Skills.json";
import { Bar, Line } from "react-chartjs-2";
import ResumeBase from "./ResumeBase";


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
        responsive: false,
        plugins:{
            legend: {
                display: false
            },
        },
       scales: {
           x: {
             min: 0, 
             max: 5, 
             grid: {drawOnChartArea: false},
             ticks: {
                 count: 6,
                },
            },
            y: {
                type: 'category',
                grid: {drawOnChartArea: false},
                ticks:{
                    callback: function(value, index, labels) {
                    var val = this.getLabelForValue(value)
                    if(/\s/.test(val)) {
                        return val.split(" ");
                    } else {
                        return val 
                    }
                  }
                }
            }
        },

    }
    const kv = Object.entries(props.skillSet)
    const data={
        labels : kv.map( x => x[0] ),
        datasets: [{
            axis: 'y',
            label: props.groupName,
            data: kv.map( x => x[1]),
            backgroundColor: props.Color,
            borderColor: props.Color,
            borderWidth: 1,
            barThickness: 10,
          },
        ],
    }

    return(
        <div className="skill-group" id={props.groupName}>
            <h4>{props.groupName}</h4>
            <Bar data={data} 
            options={options} 
            redraw={props.redraw}
            width={300}
            height = {325}
            />
        </div>
    )

}


class Skills extends ResumeBase {
    constructor(props){
        super(props)
        this.state = {inView: false}
    }
    isComponentInView=()=>{
        const elem = document.querySelector("#skills-display")
        var docViewTop = window.pageYOffset || document.documentElement.scrollTop
        var docViewBottom = docViewTop + window.innerHeight;
    
        const {top, height} = elem.getBoundingClientRect()
        // the 200 value depends on the height of NavBar and paddings, padding bottom for
        // Skills component
        var elemTop = top + docViewTop + 200 
        var elemBottom = elemTop + height
        var inView = (elemTop <= docViewBottom) && (elemBottom >= docViewTop)
        this.setState({inView : inView})

    }
    shouldComponentUpdate(nextProps, nextState) {
        const update = nextState.inView && (nextState.inView !== this.state.inView)
        return(update)

    }

    componentDidMount() {
        super.componentDidMount()
        this.isComponentInView()
        window.addEventListener("scroll", this.isComponentInView)
    }
    componentWillUnmount(){
        super.componentWillUnmount()
        window.removeEventListener("scroll", this.isComponentInView)
    }

    render() {
        return(
            <div className="resume-content" ref={this.divRef}>
                <span className="resume-content resume-content-span" id='skills-display'></span>
                <div className="resume-header">
                    <h3>Professional Skills</h3>
                </div>
                <div className ="skill-group-container">
                    {SkillsData.map(
                        (items, el)=>{return(
                        <SkillBarGroup groupName={items.group} 
                        skillSet={items.skills} Color={PuORRGBA[el]}
                        redraw={this.state.inView}
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
