import React from 'react';
function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Experiences Professionnelles </h3>
                            <p>
                                Missions Freelance de développement web sur la plateforme Fiverr (2024) <br/>
                                Refonte de l'application Citamoove  et mise à jour d'une API REST  (IOS/Android) (2025) <br/>
                                Stage de 1 mois dans l'entreprise Skiils (2025) développement des compétences en data quality et création d'un pipeline d'alerte automatique <br/>
                                <br />
                            </p>
                        </div>
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/fiver.png`} alt="fiverr"/>
                                <img src={`${process.env.PUBLIC_URL}/image/skiils.svg`} alt="skiils"/>
                                <img src={`${process.env.PUBLIC_URL}/image/citamoove.png`} alt="skiils"/>
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Futures expériences</h3>
                            <p>
                                Stage technique (3-5 mois) Domaines recherchés  :  <br/> Informatique appliqué au domaine biomédicale, ESN, Cybersécurité (2026)<br /> <br/>
                                Stage de fin d'étude (2027)<br />
                            </p>
                        </div>
                         <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/ESN.jpeg`} alt="ESN"/>
                                <img src={`${process.env.PUBLIC_URL}/image/biomed.jpeg`} alt="biomed"/>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Parcours2;
