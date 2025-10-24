import React from 'react';
function Parcours1() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">
                        <div className="parcours-section">
                            
                             <div className='parcours-section-text'>
                                <h3>Lycées</h3>
                                <p>
                                    stage de 3ème chez TF1 (2018),<br />
                                    stage de seconde chez konbini (2019) <br />
                                    serveur au restaurant Seehaus à Munich (2022)
                                    
                                </p>
                            </div>
                        
                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/TF1.jpeg`} alt="TF1"/>
                                <img src={`${process.env.PUBLIC_URL}/image/konbini.png`} alt="konbini"/>
                                <img src={`${process.env.PUBLIC_URL}/image/seehaus.svg`} alt="seehauss"/>
                            </ul>
                        </div>
                    </div>
                        <div className="parcours-section">
                            <div className='parcours-section-text'>
                                <h3>1ère et 2ème Années d'Études</h3>
                                <p>
                                            J'ai obtenu mon baccalauréat scientifique mention très bien en 2022. <br/>
                                            J'ai effectué mes deux premières années d'études en prépa PSI dans le XVème arrondissement de Paris.<br/>
                                        
                                </p>
                            </div>
                                <div className='parcours-section-add'>
                                    <img src={`${process.env.PUBLIC_URL}/image/buffon.jpeg`} alt="lycée Buffon"/>
                                </div>
                            
                        </div>
                        <div className="parcours-section">
                            <div className='parcours-section-text'>
                                    <h3>Études Supérieures</h3>
                                <p>
                                    Je suis un parcours en micro-électronique aux Mines de Saint Etienne (ISMIN) où j'ai approfondi mes connaissances en microélectronique
                                    et en ingénierie.
                                </p>
                            </div>
                            <div className='parcours-section-add'>
                                    <img src={`${process.env.PUBLIC_URL}/image/mines-saint-etienne.png`} alt="Mines Saint Etienne"/>
                            </div>
                        </div>
                        <div className='scroll-right'>Scrollez à droite !</div>
                </div>
            </div>
        </div>
    );
}

export default Parcours1;
