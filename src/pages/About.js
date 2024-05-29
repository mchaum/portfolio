import React, { useState } from 'react';
import Header from '../components/header';
import AboutComp from '../components/AboutComp';
import Education from '../components/Education';
import Skills from '../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const About = () => {

    // État pour déterminer quel composant afficher
    const [currentComponent, setCurrentComponent] = useState('about-me');

    // Fonction pour afficher le composant approprié
    const renderComponent = () => {
        switch (currentComponent) {
            case 'about-me':
                return <AboutComp />;
            case 'education':
                return <Education />;
            case 'skills':
                return <Skills />;
            default:
                return <AboutComp />;
        }
    };

    return (
        <div>
            <Header />
            <div className='about-container'>
                {/* Affichage du composant approprié */}
                    {renderComponent()}
                {/* Liens pour changer de composant */}
                <nav className='about-pointlist'>
                <article className='about-point'>
                        <div className='point' onClick={() => setCurrentComponent('about-me')}>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </div>
                        <p>À propos</p>
                    </article>

                    <article className='about-point'>
                        <div className='point' onClick={() => setCurrentComponent('education')}>
                            <FontAwesomeIcon icon={faAward} />
                        </div>
                        <p>Mon parcours</p>
                    </article>

                    <article className='about-point'>
                        <div className='point' onClick={() => setCurrentComponent('skills')}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <p>Compétences</p>
                    </article>

                </nav>
            </div>
        </div>
    );
};

export default About;