import React from 'react';
import ParcoursImages from './ParcoursImage';
function Parcours1() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
            <ParcoursImages images={[`${process.env.PUBLIC_URL}/image/fond-parcours1.webp`, `${process.env.PUBLIC_URL}/image/fond-parcours2.webp`]} />
                <div className="parcours-text">

                    <div className="parcours-section">
                        <h3>Baccalauréat</h3>
                        <p>
                            J'ai obtenu mon baccalauréat scientifique mention très bien en 2022.
                        </p>
                    </div>

                    <div className="parcours-section">
                        <h3>Première et Deuxième Années d'Études Supérieures</h3>
                        <p>
                            J'ai effectué mes deux premières années d'études en prépa PSI dans le XVème arrondissement de Paris.
                            Ces années m'ont permis de développer de fortes méthodes de travail et ont cultivé ma curiosité.
                        </p>
                    </div>

                    <div className="parcours-section">
                        <div className='etude-sup'>
                            <h3>Études Supérieures</h3>
                            <img src={`${process.env.PUBLIC_URL}/image/mines-saint-etienne.png`}/>
                        </div>
                        <p>
                            Je suis un parcours en micro-électronique aux Mines de Saint Etienne (ISMIN) où j'ai approfondi mes connaissances en microélectronique
                            et en ingénierie.
                        </p>
                    </div>

                    <div className="parcours-section">
                        <h3>Parcours International</h3>
                        <p>À venir !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parcours1;
