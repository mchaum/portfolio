import React from 'react';
import Header from '../components/header';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-bg'>
            <Header />
            <div className='div-body'>
            <article className='introduction'>
            <h1>DÉVELOPPEUSE<br/>FRONT-END REACT</h1>
            <p>Bonjour, moi c'est Mathilde, développeuse web front-end située à Bordeaux. 📍</p>
            <div className='intro-links'>
            <NavLink to="/contact" className="link-btn">Contact</NavLink>
                <a href="https://github.com/mchaum" className='link-btn'>Travaux</a>
            </div>
            </article>
            </div>
        </div>
    );
};

export default Home;