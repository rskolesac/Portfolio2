import React from "react";
import Header from "../../components/Projets/Projet1/Header";
import ProductSection from "../../components/Projets/Projet1/ProductSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HowTo from "../../components/Projets/Projet1/HowTo";

const technologies = [
  { name: "React", description: "Bibliothèque JavaScript pour construire des interfaces utilisateurs dynamiques." },
  { name: "Node.js", description: "Environnement d'exécution JavaScript pour le backend." },
  { name: "MongoDB", description: "Base de données NoSQL flexible et performante." },
  { name: "Tailwind CSS", description: "Framework CSS pour un design rapide et moderne." },
];

function Projet1() {
  return (
    <div>
      <Navbar />
    <div className="container">
      <Header />
      <ProductSection />
    </div>
      <HowTo technologies={technologies}/>
      <Footer />
    </div>
  );
}

export default Projet1;
