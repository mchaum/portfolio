import React from 'react';
import { NavLink } from 'react-router-dom';
import Projects from '../data/Projects.json';

const Card = () => {
    return (
        <div className='card-container'>
            {/* Indique ce que l'on va faire pour chaque élément des projets : on l'appelle "projey" + on crée un lien et une carte */}
            {Projects.map((projet) => (
                <div key={projet.id} className='card'>
                    {/* Création d'un lien vers une page projet en fonction de l'id */}
                    <NavLink to={`/projet/${projet.id}`}>
                        {/* Création d'une carte + d'un titre pour chaque projet */}
                        <img className='card-img' src={projet.cover} alt={projet.title} />
                        <h3 className='card-title'>{projet.title}</h3>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Card;