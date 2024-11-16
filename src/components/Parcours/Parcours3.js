import React from 'react';
import ParcoursImages from './ParcoursImage';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
            <ParcoursImages images={[`${process.env.PUBLIC_URL}/image/fond-parcours5.webp`, '']} />
                <div className="parcours-text">

                    <div className="parcours-section">
                        <h3>Web developpement</h3>
                        <p>
                            Formation autonome en web design et développement web, intégration de framework et de librairie JavaScript.
                        </p>
                    </div>

                    <div className="parcours-section">
                        <h3>Compétences</h3>
                        <ul className="skills-list">
                            <li>Développement de site Portfolio (intégration web, animation, web design)</li>
                            <li>Développement de site e-commerce (module de paiement, gestion des comptes utilisateurs, base de données, référencement)</li>
                            <li>Connaissance et optimisation des performances et sécurité (gestion des données sensibles, code optimisé, gestionnaire de paquets)</li>
                        </ul>
                    </div>

                    <section className="parcours-section">
                        <h3 className="section-title">Programmation en C</h3>
                        <ul className="skills-list">
                            <li>Structure de données et algorithmie</li>
                            <li>Programmation orientée objet (C++), code pour système embarqué</li>
                            <li>Traitement des fichiers, allocation dynamique, compréhension de l'utilisation d'un langage bas niveau</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Parcours2;
