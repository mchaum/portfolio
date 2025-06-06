import React from 'react';
import html from '../assets/HTML5.webp';
import css from '../assets/CSS3.webp';
import sass from '../assets/SASS.webp';
import js from '../assets/JS.webp';
import react from '../assets/React.webp';
import vscode from '../assets/vscode.webp';
import figma from '../assets/figma.webp';
import github from '../assets/GitHub.webp';
import notion from '../assets/notion.webp';
import creativity from '../assets/creativity.webp';
import curiosity from '../assets/curiosity.webp';
import agile from '../assets/agile.webp';
import angular from '../assets/Angular.webp';
import java from '../assets/Java.webp';
import wordpress from '../assets/WordPress.png';
import seo from '../assets/seo-logo.webp';
import { useTranslation, Trans } from 'react-i18next';

const Skills = () => {

    const { t } = useTranslation();

    return (
        <div className='skills-container'>
            <h2 className='timelines'><Trans>{t("mySkills")}</Trans></h2>
            <div className='skills-list'>
                <div className='skills-category'>
                    <h3><Trans>{t("skills")}</Trans></h3>
                    <div className='skills-line'></div>
                    <div className='category-items'>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={html} alt='Logo HTML5'></img>
                            </div>
                            <p>HTML5</p>
                        </article>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={css} alt='Logo CSS3'></img>
                            </div>
                            <p>CSS3</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={sass} alt='Logo SASS'></img>
                            </div>
                            <p>SASS</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={js} alt='Logo JavaScript'></img>
                            </div>
                            <p>JavaScript</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={react} alt='Logo React'></img>
                            </div>
                            <p>React</p>
                        </article>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={angular} alt='Logo Angular'></img>
                            </div>
                            <p>Angular</p>
                        </article>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={java} alt='Logo Java'></img>
                            </div>
                            <p>Java</p>
                        </article>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={wordpress} alt='Logo WordPress'></img>
                            </div>
                            <p>WordPress</p>
                        </article>
                    </div>
                </div>

                <div className='skills-category'>
                    <h3><Trans>{t("tools")}</Trans></h3>
                    <div className='skills-line'></div>
                    <div className='category-items'>
                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={vscode} alt='Logo VScode'></img>
                            </div>
                            <p>VSCode</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={figma} alt='Logo Figma'></img>
                            </div>
                            <p>Figma</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={github} alt='Logo Github'></img>
                            </div>
                            <p>GitHub</p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={notion} alt='Logo Notion'></img>
                            </div>
                            <p>Notion</p>
                        </article>
                    </div>
                </div>

                <div className='skills-category'>
                    <h3>Soft skills</h3>
                    <div className='skills-line'></div>
                    <div className='category-items'>
                    <article className='about-point'>
                            <div className='skill-point'>
                                <img src={creativity} alt='Icône représentant la créativité'></img>
                            </div>
                            <p><Trans>{t("creativity")}</Trans></p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={curiosity} alt='Icône représentant la curiosité'></img>
                            </div>
                            <p><Trans>{t("curiosity")}</Trans></p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={agile} alt='Icône représentant les méthodes agiles'></img>
                            </div>
                            <p><Trans>{t("agile")}</Trans></p>
                        </article>

                        <article className='about-point'>
                            <div className='skill-point'>
                                <img src={seo} alt='Icône représentant le SEO'></img>
                            </div>
                            <p><Trans>{t("seo")}</Trans></p>
                        </article>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
