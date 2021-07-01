import React from "react";
import {HashLink as Link } from "react-router-hash-link";

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listItemStyles :[],
        }
        this.ProjectData = props.ProjectData
    }
    UpdateStyles=(props)=>{
        var index
        const margin = 150
        const lastIndex = props.cellOffset.length - 1
        if (props.pageYOffset >= (props.cellOffset[lastIndex] - margin)) {
            index = lastIndex 
        } else {
            for (let i=0; i < props.cellOffset.length; i++) {
                if (props.pageYOffset < (props.cellOffset[i]-margin)) {
                    index = (i===0) ? i : i - 1
                    break;
                } 

            }
        }
        let listStyles = Array.apply(null, Array(props.cellOffset.length))
        .map((elem, i)=>{
            let style = {
                textDecoration: "inherit",
                fontWeight: (index ===i) ? "bold":"normal",
                transition: "all 0.1s ease-in-out",
            }
            return(style)
        })
        return(listStyles)


    }
    componentDidMount() {
        this.setState((state, props)=>({
            listItemStyles: this.UpdateStyles(props)
        }))
    }
    componentDidUpdate(prevProps) {
        if (this.props.pageYOffset !== prevProps.pageYOffset) {
            this.setState((state, props)=>({
                listItemStyles: this.UpdateStyles(props)
            }))
        }

    }

    render() {
        return(
        <ul>
            {this.ProjectData.map((project, i)=>{
                return(
                    <Link to={"/projects#" + project.id} 
                    style={this.state.listItemStyles[i]}>
                        <li>{project.title}</li>
                    </Link>
                )
            })}
        </ul>
        )

    }
}
export default Navigation