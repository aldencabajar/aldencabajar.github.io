import 'css/Navbar.css';
import { Link } from 'gatsby';  
import React from 'react';
import Paper from '@material-ui/core/Paper';

const listLink=(name, lnk, style) => {
    return(
        <Link style={style} to={lnk}>
            <li>{name}</li>
        </Link>
    )
}
function Navbar() {
    const navStyle = {
        color: 'white',
        textDecoration: 'inherit'
    }

    const menuItems ={
        Home: '/',
        Projects: '/Projects',
        Resume: '/Resume',
        Blog: '/Blog'
    } 
    return (
        <div className="Navbar">
            <Link style={navStyle} to='/'>
            <header className="navHeader">
                <h1>Alden Cabajar</h1>
            </header>
            </Link>
            <ul className="nav-list">
                {Object.entries(menuItems)
                .map(([key, value]) => {
                    return(
                        listLink(key, value, navStyle)
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar;