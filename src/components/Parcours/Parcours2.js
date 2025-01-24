import React from 'react';
import ParcoursImages from './ParcoursImage';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Stages</h3>
                            <p>
                                stage de 3ème chez TF1 (2018),<br />
                                stage de seconde chez konbini (2019) <br />
                                stage 1 mois chez Skiils (2025)
                            </p>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/TF1.png`}/>
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Experiences Professionnels </h3>
                            <p>
                            J'ai fais du babysitting pendant 2 ans, j'ai réalisé plusieurs mois de tutorat à des élèves secondes (2021), <br />
                            enfin j'ai travaillé au restaurant Sehhauss à Munich en (2022) et j'ai réalisé des missions Fiverr en Freelance (2023)
                            </p>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Futures expériences</h3>
                            <p>
                                Mission de développement Freelance ?<br />
                                Stage de découverte de l'entreprise (2025),<br />
                                Stage en entreprise 2027<br />
                                ouverture de mon entreprise (2028) ?
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Parcours2;
