import React from 'react';
import ParcoursImages from './ParcoursImage';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Web developpement</h3>
                            <p>
                                Formation autonome en web design et développement web, intégration de framework et de librairie JavaScript. <br />
                                Maitrise des outils (React JS, VueJs, NodeJs)

                            </p>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/react.png`}/>
                                <img src={`${process.env.PUBLIC_URL}/image/vue.jpeg`}/>
                                <img src={`${process.env.PUBLIC_URL}/image/node.webp`}/>
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Compétences</h3>
                            <ul className="skills-list">
                                <li>Développement de site Portfolio <br /> (intégration web, animation, web design)</li>
                                <li>Développement de site e-commerce <br />(module de paiement, gestion des comptes utilisateurs, base de données, référencement)</li>
                                <li>Connaissance et optimisation des performances et sécurité <br /> (gestion des données sensibles, code optimisé, gestionnaire de paquets)</li>
                            </ul>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/ux.webp`}/>
                                <img src={`${process.env.PUBLIC_URL}/image/stripe.png`}/>
                                <img src={`${process.env.PUBLIC_URL}/image/rootme.jpeg`}/>
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3 className="section-title">Programmation en C</h3>
                            <ul className="skills-list">
                                <li>Structure de données et algorithmie</li>
                                <li>Programmation orientée objet (C++), code pour système embarqué</li>
                                <li>Traitement des fichiers, allocation dynamique, compréhension de l'utilisation d'un langage bas niveau</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parcours2;
