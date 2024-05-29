import React from 'react';

const Education = () => {
    return (
        <div className="timeline-area">
            <div className="container">
                <h2 className='timelines'>MON PARCOURS</h2>
                <div className="all-timelines">

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2023-2024</h6> — Formation Intégrateur Web
                                <p>OpenClassrooms - Titre RNCP de niveau 5 - Bac+2 💻</p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2018-2023 </h6>— Expérience professionnelle
                                <p>Deux postes d'assistante administrative dans le secteur des assurances.</p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2015-2018</h6> — Licence LEA Anglais/Japonais
                                <p>Licence de langues étrangères appliquées à l'Université Bordeaux-Montaigne - Spécialité tourisme.</p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2013-2015</h6> — Licence MIASHS
                                <p>L1 & L2 en mathématiques et informatique appliquées aux sciences humaines et sociales à l'Université de Bordeaux.</p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>

                    <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                            <span>
                                <h6>2013</h6> — Bac S
                                <p>Spécialité mathématiques, mention bien.</p>
                            </span>
                            <div className="t-square"></div>
                        </div>
                    </div>
                </div>
                <button>Télécharger mon CV</button>
            </div>
        </div>
    );
};

export default Education;