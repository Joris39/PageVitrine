import React from "react";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaGithub,
  FaLink,
  FaIndustry,
  FaTools,
  FaCogs,
  FaMapMarkedAlt,
  FaDatabase,
  FaChartBar,
  FaPen,
  FaPalette,
  FaDownload,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projets.css'; // Assurez-vous d'avoir un fichier CSS pour les styles personnalisés
import { FaBrain } from "react-icons/fa6";
import imageProjetBroderie from '../assets/ProjetBroderie.png';
import imageProjetVermot from '../assets/ProjetVermot.png';
import imageProjetCartoElecCarbu from '../assets/ProjetCartoElecCarbu.png';
import rapportCartoElec from '../assets/pdfs/rapport-carto-elec.pdf';
import rapportVermot from '../assets/pdfs/rapport-vermot.pdf';
import rapportBroderie from '../assets/pdfs/rapport-broderie.pdf';


export function Projets() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Container className="py-5 projects-container" data-aos="fade-up">
      <h1 className="projects-title text-center mb-5">Mes Projets</h1>

      {/* Projet 1: Carte et Statistiques des Bornes de Recharge */}
      <Row className="mb-5">
        <Col md={12} data-aos="zoom-in">
          <Card className="project-card shadow-lg h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-4">
                <FaMapMarkedAlt className="me-2" />
                Carte et Statistiques des Bornes de Recharge et des Stations Thermiques en France
              </Card.Title>
              <Row className="flex-grow-1">
                <Col md={6}>
                  <Card.Text>
                    Projet semestriel réalisé dans le cadre de la Licence 3 en Informatique à l'Université de Franche-Comté. Ce projet vise à développer une application web pour visualiser et analyser les bornes de recharge électrique et les stations thermiques en France.
                  </Card.Text>
                  <ul className="project-features">
                    <li><FaDatabase className="me-2" />Centralisation des données provenant de sources ouvertes.</li>
                    <li><FaChartBar className="me-2" />Analyse statistique des données.</li>
                    <li><FaMapMarkedAlt className="me-2" />Création d'une carte interactive avec Leaflet et OpenStreetMap.</li>
                    <li><FaCogs className="me-2" />Gestion des comptes utilisateurs et interface administrateur.</li>
                  </ul>
                </Col>
                <Col md={6} className="text-center">
                  <img
                    src={imageProjetCartoElecCarbu}
                    alt="Carte des bornes de recharge"
                    className="img-fluid projet-image rounded"
                    data-aos="zoom-in-right"
                  />
                </Col>
              </Row>
              <div className="carousel-links mt-3 text-center">
                <a 
                  href={rapportCartoElec} 
                  download="Rapport_Projet_Carto_Elec.pdf"
                  className="btn btn-primary me-2"
                >
                  <FaDownload className="me-2" />
                  Télécharger le rapport
                </a>
              </div>   
              <div className="tech-badges mt-3 text-center">
                <Badge pill bg="primary" className="me-2 mb-2">JavaScript</Badge>
                <Badge pill bg="secondary" className="me-2 mb-2">Node.js</Badge>
                <Badge pill bg="success" className="me-2 mb-2">MySQL</Badge>
                <Badge pill bg="info" className="me-2 mb-2">Leaflet</Badge>
                <Badge pill bg="warning" className="me-2 mb-2">OpenStreetMap</Badge>
                <Badge pill bg="dark" className="me-2 mb-2">DevOps</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Projet 2: Développement d'un logiciel d'édition pour système dédié */}
      <Row className="mb-5">
        <Col md={12} data-aos="zoom-in">
          <Card className="project-card shadow-lg h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-4">
                <FaIndustry className="me-2" />
                Développement d'un logiciel d'édition pour système dédié
              </Card.Title>
              <Row className="flex-grow-1">
                <Col md={6}>
                  <Card.Text>
                    Stage réalisé chez Vermot Automation, spécialisée dans la rénovation et modernisation des décolleteuses à cames. Le projet consistait à concevoir un logiciel multifonctionnel permettant de se connecter à un Système Motion et de visualiser ses programmes.
                  </Card.Text>
                  <ul className="project-features">
                    <li><FaTools className="me-2" />Gestion des fichiers programmes et des paramètres machines.</li>
                    <li><FaPen className="me-2" />Création d'une interface utilisateur intuitive</li>
                    <li><FaCogs className="me-2" />Transfert de fichiers entre l'ordinateur et le Système Motion.</li>
                  </ul>
                </Col>
                <Col md={6} className="text-center">
                  <img
                    src={imageProjetVermot}
                    alt="Décolleteuse à cames"
                    className="img-fluid projet-image rounded"
                    data-aos="zoom-in-left"
                  />
                </Col>
              </Row>
              <div className="carousel-links mt-3 text-center">
                <a
                  href={rapportVermot}
                  download="Rapport_Stage_Vermot.pdf"
                  className="btn btn-primary me-2"
                >
                  <FaDownload className="me-2" />
                  Télécharger le rapport
                </a>
              </div>
              <div className="tech-badges mt-3 text-center">
                <Badge pill bg="primary">Delphi</Badge>
                <Badge pill bg="secondary">Pascal</Badge>
                <Badge pill bg="success">Système Motion</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     {/* Projet 3: Outils de génération automatique de patron de broderie au point de croix */}
     <Row className="mb-5">
        <Col md={12} data-aos="zoom-in">
          <Card className="project-card shadow-lg h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-4">
                <FaPalette className="me-2" />
                Outils de génération automatique de patron de broderie au point de croix
              </Card.Title>
              <Row className="flex-grow-1">
                <Col md={6}>
                  <Card.Text>
                    Projet tutoré en Master 1 Informatique visant à développer une application web pour créer automatiquement des patrons de broderie au point de croix à partir d'images. Utilisation de l'algorithme K-means pour la réduction des couleurs et optimisation des clusters.
                  </Card.Text>
                  <ul className="project-features">
                    <li><FaDatabase className="me-2" />Gestion des utilisateurs et des patrons générés.</li>
                    <li><FaChartBar className="me-2" />Analyse et optimisation des couleurs pour la broderie.</li>
                    <li><FaCogs className="me-2" />Développement d'une API pour la conversion d'images en patrons.</li>
                    <li><FaBrain className="me-2" />Système de recommandation personnalisé pour les utilisateurs.</li>
                  </ul>
                </Col>
                <Col md={6} className="text-center">
                  <img
                    src={imageProjetBroderie}
                    alt="Patron de broderie"
                    className="img-fluid projet-image rounded"
                    data-aos="zoom-in-left"
                  />
                </Col>
              </Row>
              <div className="carousel-links mt-3 text-center">
                <a
                  href={rapportBroderie}
                  download="Rapport_Projet_Broderie.pdf"
                  className="btn btn-primary me-2"
                >
                  <FaDownload className="me-2" />
                  Télécharger le rapport
                </a>
              </div>
              <div className="tech-badges mt-3 text-center">
                <Badge pill bg="primary">Node.js</Badge>
                <Badge pill bg="secondary">Python</Badge>
                <Badge pill bg="success">PostgreSQL</Badge>
                <Badge pill bg="info">Gestion de projet</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container>
  );
}

export default Projets;
