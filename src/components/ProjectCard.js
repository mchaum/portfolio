import React from 'react';
import Projects from '../data/Projects.json';

const Card = () => {
    return (
        <div className='card-container'>
            {/* Création d'une carte pour chaque projet*/}
            {Projects.map((projet) => (
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
    )
}

export default Card;