import React from 'react';
import Header from '../components/header';
import { NavLink } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className='home-bg'>
            <Header />
            <div className='div-body'>
                <article className='introduction'>
                    <h1><Trans>{t("homeTitle")}</Trans></h1>
                    <p>{t("homeDescription")}</p>
                    <div className='intro-links'>
                        <NavLink to="/contact" className="link-btn">{t("contact-btn")}</NavLink>
                        <a href="https://github.com/mchaum" className='link-btn'>{t("works")}</a>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Home;