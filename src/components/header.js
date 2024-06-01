import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/logoC.webp';

const Header = () => {

    const [showLinks, setShowLinks] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    // Fonction permettant d'ouvrir le menu en version mobile //
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    // Fonction permettant de cacher le bouton lorsque l'on défile sur la page pour éviter le chevauchement //
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <img src={Logo} alt="mchaum" />
            <div className={`banner-navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Accueil</p></NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>A propos</p></NavLink>
                <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Projets</p></NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Contact</p></NavLink>
            </div>
            <button className={`burger-nav ${scrolled ? "scrolled" : ""}`} onClick={handleShowLinks}>
            <span className="burger-bar"></span>
            </button>
            
        </header>
    );
};

export default Header;