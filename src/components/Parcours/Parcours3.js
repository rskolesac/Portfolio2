import React from 'react';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Compétences techniques WEB</h3>
                            <p>
                                Formation autonome en web design et développement web, intégration de framework et API. <br />
                                Maitrise des outils (React JS, VueJs, NodeJs) connaissances en cybersécurité appliquée au web et protocoles réseaux. <br/>
                                3 projets de développement web réalisés : <br/>(Portfolio, site e-commerce, Chatbot IA ). <br />

                            </p>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/react.png`} alt="react"/>
                                <img src={`${process.env.PUBLIC_URL}/image/vue.jpeg`} alt="vue"/>
                                <img src={`${process.env.PUBLIC_URL}/image/node.webp`} alt="node"/>
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Compétences </h3>
                            <ul className="skills-list">
                                <li>Cryptographie de base (AES, SHA-256, RSA, ASCON)</li>
                                <li>Langage bas niveau (C, C++, VHDL), 3 projets réalisés : </li>
                                <li>1 - Simulation d'une file d'attente et optimisation de la prise en charge des clients (C) </li>
                                <li>2 - Chiffrement ASCON (VHDL)</li>
                                <li>3 - Détection d'anomalie cardiaque à l'aide de signaux(C++)</li>                          
                                <li>Système embarqué : Création d'un capteur d'apnée du sommeil à l'aie d'un circuit conditionneur</li>
                            </ul>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/AES.png`} alt="ux"/>
                                <img src={`${process.env.PUBLIC_URL}/image/cpp.png`} alt="stripe"/>
                                <img src={`${process.env.PUBLIC_URL}/image/rootme.jpeg`} alt="rootme"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parcours2;
