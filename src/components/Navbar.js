import "css/Navbar.css";
import { Link } from "gatsby";
import React from "react";

const listLink = (name, lnk, style) => {
  return (
    <Link style={style} to={lnk}>
      <li>{name}</li>
    </Link>
  );
};
function Navbar() {
  const navStyle = {
    color: "white",
    textDecoration: "inherit",
  };

  const menuItems = {
    Home: "/",
    Projects: "/Projects",
    Resume: "/Resume",
    Blog: "/Blog",
  };
  return (
    <div className="Navbar">
      <Link style={navStyle} to="/">
        <header className="navHeader">
          <h2>Alden Cabajar</h2>
        </header>
      </Link>
      <div class="divider"></div>
      <ul className="nav-list">
        {Object.entries(menuItems).map(([key, value]) => {
          return listLink(key, value, navStyle);
        })}
      </ul>
    </div>
  );
}

export default Navbar;
