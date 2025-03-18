import React, { useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import Projects from '../data/Projects.json';

const Card = () => {
    const { t, i18n } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skillName) => {
        setSelectedSkill(skillName);
    };

    const handleShowAll = () => {
        setSelectedSkill(null);
    };

    const filteredProjects = selectedSkill ? Projects.filter(project =>
        project.competences.some(competence => competence.name === selectedSkill)
    ) : Projects;

    return (
        <div className='projects-container'>
            <h2><Trans>{t("myProjects")}</Trans></h2>
            <div className="filters">
                <button onClick={handleShowAll} className={!selectedSkill ? 'selected-filter' : 'filter-btn'}><Trans>{t("all")}</Trans></button>

                {Projects.reduce((acc, project) => {
                    project.competences.forEach(competence => {
                        if (!acc.includes(competence.name)) {
                            acc.push(competence.name);
                        }
                    });
                    return acc;
                }, []).map((skill, index) => (
                    <button key={index} onClick={() => handleSkillClick(skill)} className={selectedSkill === skill ? 'selected-filter' : 'filter-btn'}>{skill}</button>
                ))}
            </div>

            <div className='card-container'>
                {filteredProjects.map((projet) => (
                    <div key={projet.id} className='card'>
                        <img className='card-img' src={projet.cover} alt={projet.title[i18n.language]} />
                        <div className='card-content'>
                            <h3 className='card-title'><Trans>{projet.title[i18n.language]}</Trans></h3>
                            <p><Trans>{projet.description[i18n.language]}</Trans></p>
                            <div className='card-links'>
                                {projet.links.map((link, index) => (
                                    <a key={index} href={link.link}>{link.name}</a>
                                ))}
                            </div>
                            <div className='card-competences'>
                                {projet.competences.map((competence, index) => (
                                    <img key={index} src={competence.icon} alt={competence.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;
