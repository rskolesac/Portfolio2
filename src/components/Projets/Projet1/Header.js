import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="brand-name">COCOCANDIA</h1>
      <div className="header-content">
        <div className="candle-image-container">
            <img src={`${process.env.PUBLIC_URL}/image/fond-bougie.png`} alt="Bougie parfumée" className="candle-img" />
            <img src={`${process.env.PUBLIC_URL}/image/creation.webp`} alt="Atelier de fabrication" className="workshop-img" />
        </div>

        <div className="text-content">
          <h2>BOUGIE PARFUMÉE</h2>
          <p>
            Je participe à l’atelier de création de bougie de ma mère depuis mes
            8 ans. J’ai décidé de partager cette tradition avec un plus grand
            nombre en vendant nos créations. Toutes nos bougies sont réalisées
            à la main.
          </p>
          <button className="discover-button">DÉCOUVREZ NOTRE SITE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
