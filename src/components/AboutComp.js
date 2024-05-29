import React from 'react';
import aboutImg from '../assets/about-img.png';

const AboutComp = () => {
    return (
        <div className='about-me'>
            <h2 className='timelines'>À PROPOS</h2>
            <div className='about-content'>
                <img src={aboutImg} alt="PC avec des plantes"></img>
                <p>Bonjour, je m'appelle Mathilde et je suis développeuse web front-end ! Passionnée par la création de solutions web fluides et intuitives, mon intérêt pour la création numérique et ma soif de connaissances m'ont naturellement conduite vers ce domaine.</p>
                <p>Après une période d'errance où j'ai exploré divers domaines professionnels, j'ai finalement trouvé ma vocation dans le développement web.  C'est donc en 2023, suite à un changement de vie, que j'ai eu l'opportunité de reprendre mes études. Mon premier contact avec la programmation remonte à 2013, lors de ma première licence (MIASHS) où j'ai acquis des bases en algorithme et en Python. Ce n'est cependant que l'année dernière que j'ai décidé de me spécialiser dans le développement front-end.</p>
                <p>J'ai rejoint la formation certifiante de développeur intégrateur web (niveau bac +2) d'OpenClassrooms, où j'ai renforcé mes compétences en HTML et CSS, tout en développant de nouvelles connaissances en JavaScript et React. Sérieuse, autonome et passionnée, je m'efforce quotidiennement d'enrichir mes compétences en développement, avec une affection particulière pour React.</p>
                <p>Si vous êtes intéressé par une collaboration ou souhaitez en savoir plus sur mon parcours et mes projets, n'hésitez pas à me contacter ! Je suis toujours ouverte à de nouvelles opportunités. ☀️ </p>
            </div>
        </div>
    );
};

export default AboutComp;