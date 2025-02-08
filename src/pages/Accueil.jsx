import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaLaptopCode, FaEnvelope, FaFileAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Accueil.css";
import profilePic from '../assets/profile.jpg'; // Importez l'image
import { useNavigate, useLocation } from "react-router-dom";



const Accueil = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction de navigation modifiée
  const handleNavigation = (path, anchor = '') => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate(path + (anchor ? `#${anchor}` : ''));
      if (anchor) {
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, 100);
  };

  // Effet pour s'assurer que la page est en haut après chaque navigation
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <Container className="py-5">
      {/* Section Hero */}
      <Row className="align-items-center hero-section" data-aos="fade-up">
        <Col md={6} className="text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">Joris Baud</h1>
          <h2 className="h3 text-primary mb-4">Étudiant en Master Informatique</h2>
          <p className="lead mb-4">
            Passionné par le développement et l'intelligence artificielle, 
            je suis à la recherche d'une alternance pour ma 2ème année de Master.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="me-3"
            onClick={() => handleNavigation('/contact')}
          >
            Me contacter
          </Button>
          <Button 
            variant="outline-primary" 
            size="lg"
            onClick={() => handleNavigation('/cv')}
          >
            Voir mon CV
          </Button>
        </Col>
        <Col md={6} className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <img 
            src={profilePic}
            alt="Joris Baud" 
            className="hero-image"
          />
        </Col>
      </Row>

      {/* Section Cards */}
      <Row className="mt-5 py-5">
        <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <Card 
            className="feature-card h-100" 
            onClick={() => handleNavigation('/cv', 'education')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="text-center">
              <FaGraduationCap className="feature-icon mb-3" />
              <Card.Title>Formation</Card.Title>
              <Card.Text>
                Master en Informatique spécialisé en Base de Données et IA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Card 
            className="feature-card h-100"
            onClick={() => handleNavigation('/projets')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="text-center">
              <FaLaptopCode className="feature-icon mb-3" />
              <Card.Title>Projets</Card.Title>
              <Card.Text>
                Découvrez mes réalisations et projets personnels
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="300">
          <Card className="feature-card h-100"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              navigate('/cv');
            }}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="text-center">
              <FaFileAlt className="feature-icon mb-3" />
              <Card.Title>CV</Card.Title>
              <Card.Text>
                Consultez mon parcours et mes compétences
              </Card.Text>
              <Link to="/cv" className="stretched-link" />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="400">
          <Card 
            className="feature-card h-100"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'instant'
              });
              navigate('/contact');
            }}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="text-center">
              <FaEnvelope className="feature-icon mb-3" />
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Intéressé par mon profil ? Contactez-moi !
              </Card.Text>
              {/* Supprimez le Link car il interfère avec onClick */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section Technologies */}
      <Row className="mt-5" data-aos="fade-up">
        <Col className="text-center">
          <h3 className="mb-4">Technologies maîtrisées</h3>
          <div className="tech-stack">
            {['Java', 'Python', 'React', 'Node.js', 'SQL', 'Git'].map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;