import React from "react";

class HoverImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {},
            dimensions: {},
            iconStyles: {
                position: "relative", 
                visibility: "hidden", 
                display: "flex"
            },
            resized: false,
            CurrWindowSize: 0 
        }
        this.ghlogo = process.env.PUBLIC_URL + "/github-icon.png"
        this.blog = process.env.PUBLIC_URL + "/blog-icon.png" 
        this.gh_link = String(this.props.gh)
        this.blog_link = String(this.props.blog_link)
        this.img_link = process.env.PUBLIC_URL + this.props.image
        this.imageRef = React.createRef()
    }

    GetDimensions=() => {
        var currImgWidth = this.imageRef.current.clientWidth
        var currImgHeight = this.imageRef.current.clientHeight
        let iconStyles = this.state.iconStyles
        let updateIconStyles = {
            ...iconStyles,
            left: currImgWidth/3, 
            bottom: currImgHeight/1.5
        }
        this.setState({
            dimensions:{height: currImgWidth, width: currImgHeight},
            iconStyles: updateIconStyles 
        })

    }

    Resized =()=>{
        var WindowSize = window.innerWidth * window.innerHeight
        this.GetDimensions()
        this.setState({
            CurrWindowSize: WindowSize, 
            resized: WindowSize !== this.CurrWindowSize,
        })

    }
    componentDidMount=() => {
        this.GetDimensions()
        window.addEventListener("resize", this.Resized)
        console.log("Component mounted")
    }
    componentWillUnmount=()=>{
        window.removeEventListener("resize", this.Resized)
    }

    EventWhenHover=()=> {
        const HoverStyle = {
            opacity: 0.1,
            transition: "0.5s"
        }
        let iconStyles = this.state.iconStyles
        let iconHoverStyles = {
            ...iconStyles,
            visibility: "visible"
        }

        this.setState({
            styles: HoverStyle, 
            iconStyles: iconHoverStyles
        })
    }
    EventOut=()=>{
        let iconStyles = this.state.iconStyles
        let iconHoverStyles = {
            ...iconStyles,
            visibility: "hidden"
        }
        this.setState({
            styles: {opacity: 1, transition: "0.5s"},
            iconStyles: iconHoverStyles
        })       
    }

    render() {
        return(
            <div className="img-container" 
            onMouseOver={this.EventWhenHover} onMouseOut={this.EventOut}>
                <img src={this.img_link} 
                ref={this.imageRef}
                onLoad={this.GetDimensions}
                style={this.state.styles} 
                alt="tmp"/>
                <div className="overlay" style={this.state.iconStyles}>
                    <a href={this.gh_link}> <img src={this.ghlogo}  className="ghlogo" alt="github-icon"/></a>
                    <a href={this.blog_link}> <img src={this.blog}  className="blog" alt="blog-icon"/></a>
                </div>
            </div>
        )
    }
} 

export default HoverImage