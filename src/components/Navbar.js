import '../css/Navbar.css';
import '../App.css'
import { Link } from 'react-router-dom';  

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
        About: '/about',
        Contact: '/contact',
        Projects: '/projects',
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