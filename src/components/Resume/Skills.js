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
    console.log(data)

    return(
        <div className="skill-group" id={props.groupName}>
            <h4>{props.groupName}</h4>
            <Bar data={data} options={options}/>
        </div>
    )

}


class Skills extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <div className="skills-display">
                <header className="resume-header">
                    <h3>Professional Skills</h3>
                </header>
                <div className ="skill-group-container">
                    {SkillsData.map(
                        (items, el)=>{return(
                        <SkillBarGroup groupName={items.group} 
                        skillSet={items.skills} Color={PuORRGBA[el]}/>
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
