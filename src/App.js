import React from 'react';
import AcceuilPage from "./Page/AcceuilPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/style.css"
import "./assets/layout.css"
import "./assets/parcours.css"
import "./assets/apropos.css"
import AproposPage from './Page/AproposPage';
import CVPage from "./Page/CVPage";
import { ImageProvider } from './context/ImageContext';

function App() {
    return (
        <Router basename="/Portfolio2">
            <Routes>
                <Route path="/" element={<AcceuilPage />} />
                <Route path="/parcours" element={
                    <ImageProvider>
                        <AproposPage />
                    </ImageProvider>} />
                <Route path="/cv" element={<CVPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
