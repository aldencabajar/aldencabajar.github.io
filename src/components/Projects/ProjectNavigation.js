import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listItemStyles :[],
        }
        this.ProjectData = props.ProjectData
        this.UpdateStyles = this.UpdateStyles.bind(this)
    }
    UpdateStyles=(props)=>{
        // var listStyles = Array(this.offsety.length)
        var index
        for (let i=0; i < props.cellOffset.length; i++) {
            let dist = props.pageYOffset - props.cellOffset[i]
            if (props.pageYOffset < props.cellOffset[i]) {
                index = (i===0) ? i : i - 1
                console.log(i)
                break;
            }
        }
        let listStyles = Array.apply(null, Array(props.cellOffset.length))
        .map((elem, i)=>{
            let style = {
                textDecoration: "inherit",
                fontWeight: (index ===i) ? "bold":"normal",
                transition: "font-weight 0.1s ease-in",
            }
            return(style)
        })
        console.log(index)
        return(listStyles)
        // this.setState({listItemStyles: listStyles})


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
        console.log(this.props.pageYOffset)

    }

    render() {
        return(
            <ul>
                {this.ProjectData.map((project, i)=>{
                    return(
                        <Link to={project.gh_link} 
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