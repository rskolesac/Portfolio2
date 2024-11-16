import React from 'react';
import AcceuilPage from "./Page/AcceuilPage";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./assets/style.css"
import "./assets/layout.css"
import "./assets/parcours.css"
import "./assets/apropos.css"
import AproposPage from './Page/AproposPage';
import CVPage from "./Page/CVPage";
import { ImageProvider } from './context/ImageContext';

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

function App() {
    return (
        <BrowserRouter basename="/Portfolio2">
            <RedirectHandler />
            <Routes>
                <Route path="/" element={<AcceuilPage />} />
                <Route path="/parcours" element={
                    <ImageProvider>
                        <AproposPage/>
                    </ImageProvider>
                    }   />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
