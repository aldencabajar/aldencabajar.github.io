import React from "react";

export default class ResumeBase extends React.Component {
    constructor(props) {
        super(props)
        this.divRef = React.createRef()
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

    componentDidMount() {
        this.updateOffset()
        window.addEventListener('resize', this.updateOffset)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOffset)
    }

}