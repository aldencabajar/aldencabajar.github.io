import React from 'react';
class HoverImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {styles: {}}
        this.gh_link = this.props.gh
        this.blog_link = this.props.blog_link
        this.img_link = process.env.PUBLIC_URL + this.props.image
    }

    EventWhenHover=()=> {
        const HoverStyle = {
            opacity: 0.2,
            transition: "0.5s"
        }
        this.setState({styles: HoverStyle})
    }
    EventOut=()=>{
        this.setState({styles: {opacity: 1, transition: "0.5s"}})       
    }

    render() {
        return(
            <img src={this.img_link} 
            style={this.state.styles} 
            onMouseOver={this.EventWhenHover}
            onMouseOut={this.EventOut}
            alt='tmp'/>
        )
    }
} 

export default HoverImage