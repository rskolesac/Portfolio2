import React, {useEffect} from 'react';
import AcceuilPage from "./Page/AcceuilPage";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./assets/style.css"
import "./assets/layout.css"
import "./assets/parcours.css"
import "./assets/apropos.css"

import AproposPage from './Page/AproposPage';
import CVPage from "./Page/CVPage";
import Projet1 from "./Page/Projets/Projet1";
import Projet2 from "./Page/Projets/Projet2";
import Projet3 from "./Page/Projets/Projet3";
import { ImageProvider } from './context/ImageContext';
import { AnimatePresence } from 'framer-motion';
import NotFound from './Page/404';

function RedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const redirect = params.get("redirect");

        if (redirect) {
            navigate(redirect, { replace: true });
        }
    }, [location, navigate]);

    return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AcceuilPage />} />
        <Route path="projet1" element={<Projet1 />} />
        <Route path="projet2" element={<Projet2 />} />
        <Route path="projet3" element={<Projet3 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/parcours" element={
            <ImageProvider>
                <AproposPage/>
            </ImageProvider>
        }   />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
    return (
        <BrowserRouter basename="/Portfolio2">
            <RedirectHandler />
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
