import '../css/Navbar.css';
import '../App.css'
import { Link } from 'react-router-dom';  

function Navbar() {
    const navStyle = {
        color: 'white',
        textDecoration: 'inherit'
    }
    return (
        <div className="Navbar">
            <Link style={navStyle} to='/'>
            <header className="navHeader">
                <h1>Alden Cabajar</h1>
            </header>
            </Link>
            <ul className="nav-list">
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <li>Contact</li>
                <Link style={navStyle} to= '/projects'>
                <li>Projects</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;