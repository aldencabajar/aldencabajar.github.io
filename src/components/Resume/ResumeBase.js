import React from "react";

export default class ResumeBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerStyle: this.headerStyleNorm
        }
        this.divRef = React.createRef()
        this.headerStyleNorm ={
            position: 'sticky',
            top: '75px',
            zIndex: 3,
            backgroundColor: 'rgb(255, 255, 255)',
        }
        this.handleState = this.props.handleState
        this.order = this.props.order
    }

    updateOffset=()=>{
        this.handleState(prevState => {
            let currState = prevState
            currState[this.order] = this.divRef.current.offsetTop
            return(currState)
        })
    }
    updateHeaderStyle=()=>{
        const isInView = (window.pageYOffset || document.documentElement.scrollTop) >= this.divRef.current.offsetTop 
        if (isInView) {
            let headerStyle = this.state.headerStyle 
            let updatedHeaderStyle = {
                ...headerStyle,
                boxShadow: "0px 10px 10px -10px rgba(0,0,0,.2)"
            }
            this.setState({headerStyle: updatedHeaderStyle})
        } else {
            this.setState({headerStyle: this.headerStyleNorm})    
        }
        console.log(this.divRef.current.offsetTop, this.state.headerStyle, isInView)


    }

    componentDidMount() {
        this.updateOffset()
        window.addEventListener('resize', this.updateOffset)
        window.addEventListener('scroll', this.updateHeaderStyle)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOffset)
        window.removeEventListener('scroll', this.updateHeaderStyle)
    }

}