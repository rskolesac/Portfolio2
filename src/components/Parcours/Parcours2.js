import React from 'react';
import ParcoursImages from './ParcoursImage';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
            <ParcoursImages images={['`${process.env.PUBLIC_URL}/image/fond-parcours3.webp`', '`${process.env.PUBLIC_URL}/image/fond-parcours4.webp`']} />
                <div className="parcours-text">

                    <div className="parcours-section">
                        <h3>Stages</h3>
                        <p>
                            stage en entreprise chez TF1 (2018),<br />
                            stage en entreprise chez konbini (2019)
                        </p>
                    </div>

                    <div className="parcours-section">
                        <h3>Experiences Professionnels </h3>
                        <p>
                         J'ai fais du babysitting pendant 2 ans, j'ai réalisé plusieurs mois de tutorat à des élèves secondes (2021), <br />
                         enfin j'ai travaillé au restaurant Sehhauss à Munich en (2022) et j'ai réalisé des missions Fiverr en Freelance (2023)
                        </p>
                    </div>

                    <div className="parcours-section">
                        <h3>Futur expériences</h3>
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
    );
}

export default Parcours2;
