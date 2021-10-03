import React from 'react'
import 'css/App.css'
import Navbar from 'components/Navbar'
import {slide as Menu} from 'react-burger-menu'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import favicon from '../images/favicon-ac.ico';
import Helmet from 'react-helmet';



export default function Layout({ children }) {
    const styleOther ={height:"100%"}

    const [menuStateOpen, menuSetState] = useState(false)

    const handleMenuClick=(e)=>{menuSetState(false)}
    const handleMenuStateOnChange=(state)=>{
        menuSetState(state.isOpen)
    }
    useEffect(()=>{
    document.title = "Alden Cabajar"
    },[])

    return(
    <div className="App" id="outer-container" style={styleOther}>
        <Helmet>
            <link rel='icon' href={favicon} />
        </Helmet>
        <Menu width={500} right={true} 
        isOpen={menuStateOpen}
        onStateChange={handleMenuStateOnChange} 
        outerContainerId= { 'outer-container' }>
            <Link to='/' onClick={handleMenuClick}>home</Link>
            <Link to='/Projects' onClick={handleMenuClick}>projects</Link>
            <Link to='/Resume' onClick={handleMenuClick}>resume</Link>
            <Link to='/Blog' onClick={handleMenuClick}>blog</Link>
        </Menu>
        <Navbar/>
        {children}
    </div>
    )

}