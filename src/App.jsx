import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import CV from "./pages/CV";
import Projects from "./pages/Projets";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from 'aos';

function App() {


    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navRef = useRef(null);

  // Gestion du clic en dehors du menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavCollapsed(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fonction pour fermer le menu
  const handleNavCollapse = () => setIsNavCollapsed(true);

    
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" ref={navRef}>
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={handleNavCollapse}>
              Joris Baud
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div 
              className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleNavCollapse}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cv" onClick={handleNavCollapse}>
                    CV
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projets" onClick={handleNavCollapse}>
                    Projets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={handleNavCollapse}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        
        



        <footer className="bg-dark text-white text-center py-3 mt-4">
          <div className="container">
            <p>&copy; 2025 Joris Baud. Tous droits réservés.</p>
            <p>
              <a href="https://github.com/Joris39" className="text-white">GitHub</a> | 
              <a href="https://www.linkedin.com/in/joris-baud-272b38259/" className="text-white"> LinkedIn</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;