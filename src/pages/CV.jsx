import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CV.css'; // Assurez-vous d'avoir un fichier CSS pour les styles personnalisés
import profilePic from '../assets/profile.jpg'; // Importez l'image
import cvFile from '../assets/CV.pdf'; // Importez le fichier CV

function CV() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Container className="main-content">
        <Row id="about" className="section-custom" data-aos="fade-up">
          <Col md={6} className="about-text">
            <h2 className="section-title">À propos de moi</h2>
            <p className="section-description">
              Étudiant en première année de Master informatique à Dijon, je suis à la recherche d'une alternance pour la 2ème année de Master en "Base de Données et Intelligence Artificielle". Passionné par l'informatique, je m'investis pleinement dans mes projets et cherche toujours à m'améliorer.
            </p>
            <Button variant="primary" href={cvFile} download className="mt-3">
              Télécharger mon CV
            </Button>
          </Col>
          <Col md={6} className="about-image">
            <Image src={profilePic} roundedCircle fluid className="profile-pic" data-aos="zoom-in" />
          </Col>
        </Row>

        <Row id="skills" className="section-custom" data-aos="fade-up">
          <Col>
            <h2 className="section-title">Compétences</h2>
            <p className="section-description">
              Modélisation et gestion de bases de données, gestion de réseau, programmation en Java, Python, C, C++, et autres.
            </p>
            <div className="skills-list">
              <span className="skill-item" data-aos="fade-left">Java</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="100">Python</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="200">JavaScript</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="300">SQL</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="400">Kotlin</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="500">Pascal</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="600">C</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="700">C++</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="800">Node.js</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="900">Git</span>
            </div>
          </Col>
        </Row>

        <Row id="education" className="section-custom" data-aos="fade-up">
          <Col>
            <h2 className="section-title">Formations</h2>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Master d'informatique</Card.Title>
                <Card.Text>Université de Bourgogne, Dijon (2024 - Aujourd'hui)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Licence d'informatique</Card.Title>
                <Card.Text>Université de Franche-Comté, Besançon (2021 - 2024)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Baccalauréat général</Card.Title>
                <Card.Text>Lycée Paul Émile Victor, Champagnole - Spécialité Mathématique et Informatique</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="experience" className="section-custom" data-aos="fade-up">
          <Col>
            <h2 className="section-title">Expériences Professionnelles</h2>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Stage informatique</Card.Title>
                <Card.Text>Entreprise Vermot Automation - Développement d'un logiciel d'édition pour système dédié (12 semaines)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Gendarme réserviste</Card.Title>
                <Card.Text>Groupement de gendarmerie du Jura (2023 - Aujourd'hui)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Intérimaire chez Manpower</Card.Title>
                <Card.Text>Travaux de manutention, vissage, mise en place de pylônes (AFFLEC), travaux de manutention (Imprimerie GRESSET)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="contact" className="section-custom" data-aos="fade-up">
          <Col>
            <h2 className="section-title">Contact</h2>
            <p className="section-description">
              <strong>Email:</strong> jorisbaud39@gmail.com<br />
              <strong>Adresse:</strong> 22 rue de Lattre de Tassigny, 39110, Andelot en Montagne<br />
              <strong>Téléphone:</strong> 07.85.86.05.13
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CV;