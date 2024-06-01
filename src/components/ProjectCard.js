import React, { useState } from 'react';
import Projects from '../data/Projects.json';

const Card = () => {
    // État de la compétence sélectionnée //
    const [selectedSkill, setSelectedSkill] = useState(null);

    // Fonction pour mettre à jour l'état de la compétence sélectionnée //
    const handleSkillClick = (skillName) => {
        setSelectedSkill(skillName);
    };

    // Fonction pour afficher tous les travaux : remet l'état à null pour tout afficher //
    const handleShowAll = () => {
        setSelectedSkill(null);
    };

    // Fonction pour filtrer les projets en fonction de la compétence sélectionnée : si selectedSkill, alors on filtre les projets contenant cette compétence //
    const filteredProjects = selectedSkill ? Projects.filter(project =>
        project.competences.some(competence => competence.name === selectedSkill)
    ) : Projects;
    // project.competences.some() vérifie si au moins une des compétences du projet correspond à la compétence sélectionnée //

    return (
        <div className='projects-container'>
            <h2>MES PROJETS</h2>
            <div className="filters">
                <button onClick={handleShowAll} className={!selectedSkill ? 'selected-filter' : 'filter-btn'}>Tous</button>

                {/* On réduit les projets à une valeur : 1 projet = 1 compétence */}
                {Projects.reduce((acc, project) => {
                    // Pour chaque compétence, si elle n'est pas déjà présente on l'ajoute //
                    project.competences.forEach(competence => {
                        if (!acc.includes(competence.name)) {
                            acc.push(competence.name);
                        }
                    });
                    return acc;
                    // Un tableau contenant toutes les compétences est retourné, on le parcourt avec map et on crée un bouton pour chacun //
                }, []).map((skill, index) => (
                    <button key={index} onClick={() => handleSkillClick(skill)} className={selectedSkill === skill ? 'selected-filter' : 'filter-btn'}>{skill}</button>
                ))}
            </div>

            <div className='card-container'>
                {/* Création d'une carte pour chaque projet filtré */}
                {filteredProjects.map((projet) => (
                    <div key={projet.id} className='card'>
                        <img className='card-img' src={projet.cover} alt={projet.title} />
                        <div className='card-content'>
                            <h3 className='card-title'>{projet.title}</h3>
                            <p>{projet.description}</p>
                            <div className='card-links'>
                                {/* Parcours de chaque lien et création d'une balise <a> */}
                                {projet.links.map((link, index) => (
                                    <a key={index} href={link.link}>{link.name}</a>
                                ))}
                            </div>
                            <div className='card-competences'>
                                {/* Parcours de chaque compétence et création d'une balise <img> */}
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