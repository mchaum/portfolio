import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>mchaum</h1>
            <div className='banner-navbar'>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Accueil</p></NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>A propos</p></NavLink>
            <NavLink to="/skills" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Compétences</p></NavLink>
            <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Projets</p></NavLink>
            <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Contact</p></NavLink>
                </div>
        </header>
    );
};

export default Header;