import React, { useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import Header from '../components/header';
import AboutComp from '../components/AboutComp';
import Education from '../components/Education';
import Skills from '../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const About = () => {
    const { t } = useTranslation();
    
    // État pour déterminer quel composant afficher //
    const [currentComponent, setCurrentComponent] = useState('about-me');

    // Fonction pour afficher le composant approprié //
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
                        <p><Trans>{t("about")}</Trans></p>
                    </article>

                    <article className='about-point'>
                        <div className='point' onClick={() => setCurrentComponent('education')}>
                            <FontAwesomeIcon icon={faAward} />
                        </div>
                        <p><Trans>{t("myEducation")}</Trans></p>
                    </article>

                    <article className='about-point'>
                        <div className='point' onClick={() => setCurrentComponent('skills')}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <p><Trans>{t("skills")}</Trans></p>
                    </article>
                </nav>
            </div>
        </div>
    );
};

export default About;