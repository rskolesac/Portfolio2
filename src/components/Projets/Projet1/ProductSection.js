import React from "react";

const ProductSection = () => {
  return (
    <section className="product-section">
      <h2 className="product-title">NOS PRODUITS</h2>
      <div className="product-candle-container">
        <div className="product-candle-text-container">
          <p className="candle-description">
            Nos bougies parfumées sont fabriquées à partir de matériaux d’origines 100% françaises.
          </p>
          <p className="candle-text">
            Nos bougies artisanales vous transportent vers un voyage sensoriel
            unique : une brise délicate des Antilles aux notes exotiques de coco et
            de tiaré, l’apaisement d’un spa enveloppé d’arômes de lavande et
            d’eucalyptus, ou encore la chaleur d’un chalet boisé bercé par des
            effluves de vanille et de cèdre. Fermez les yeux, allumez la mèche… et
            laissez la magie opérer.
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/image/bougie.webp`} alt="Bougie coco" className="product-img" />
      </div>
    </section>
  );
};

export default ProductSection;
