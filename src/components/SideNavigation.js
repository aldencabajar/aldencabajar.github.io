import React from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listItemStyles :[],
        }
        this.data = props.data
        this.route = props.route
        this.header= props.header
        this.className = props.className
    }

    
    UpdateStyles=(props)=>{
        var index
        const margin = 175 
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
        <div className={this.className}>
            <header>
                <h3>{this.header}</h3>
            </header>
            <ul>
                {this.data.map((item, i)=>{
                    return(
                        <AnchorLink to={this.route + "#" + item.id}>
                            <li style={this.state.listItemStyles[i]}>{item.title}</li>
                        </AnchorLink>
                    )
                })}
            </ul>
        </div>
        )

    }
}
export default Navigation