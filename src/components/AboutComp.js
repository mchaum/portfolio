import React from 'react';
import aboutImg from '../assets/about-img.png';
import { useTranslation, Trans } from "react-i18next";

const AboutComp = () => {
    const { t } = useTranslation();

    return (
        <div className='about-me'>
            <h2 className='timelines'><Trans>{t("aboutTitle")}</Trans></h2>
            <div className='about-content'>
                <img src={aboutImg} alt={t("aboutImgAlt")} />
                <p><Trans>{t("aboutParagraph1")}</Trans></p>
                <p><Trans>{t("aboutParagraph2")}</Trans></p>
                <p><Trans>{t("aboutParagraph3")}</Trans></p>
                <p><Trans>{t("aboutParagraph4")}</Trans></p>
            </div>
        </div>
    );
};

export default AboutComp;