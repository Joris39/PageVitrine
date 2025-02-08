import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Assurez-vous d'avoir un fichier CSS pour les styles personnalisés
import profilePic from './assets/profile.jpg'; // Importez l'image

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="brand-custom">Joris Baud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-custom">
              <Nav.Link href="#about" className="nav-link-custom">À propos</Nav.Link>
              <Nav.Link href="#skills" className="nav-link-custom">Compétences</Nav.Link>
              <Nav.Link href="#education" className="nav-link-custom">Formations</Nav.Link>
              <Nav.Link href="#experience" className="nav-link-custom">Expériences</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-content">
        <Row id="about" className="section-custom" data-aos="fade-up">
          <Col md={6} className="about-text">
            <h2 className="section-title">À propos de moi</h2>
            <p className="section-description">
              Étudiant en première année de Master informatique à Dijon, je suis à la recherche d'une alternance pour la 2ème année de Master en "Base de Données et Intelligence Artificielle". Passionné par l'informatique, je m'investis pleinement dans mes projets et cherche toujours à m'améliorer.
            </p>
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
              <span className="skill-item" data-aos="fade-left" data-aos-delay="200">Python</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="400">C</span>
              <span className="skill-item" data-aos="fade-left" data-aos-delay="600">C++</span>
            </div>
          </Col>
        </Row>

        <Row id="education" className="section-custom" data-aos="fade-up">
          <Col>
            <h2 className="section-title">Formations</h2>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Master d'informatique</Card.Title>
                <Card.Text>Université de Franche-Comté, Besançon (2021 - Aujourd'hui)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Licence d'informatique</Card.Title>
                <Card.Text>Université de Franche-Comté, Besançon</Card.Text>
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

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2025 Joris Baud. Tous droits réservés.</p>
          <p>Suivez-moi sur <a href="https://github.com/Joris39" className="text-white">GitHub</a> | <a href="https://www.linkedin.com/in/joris-baud-272b38259/" className="text-white">LinkedIn</a></p>
        </Container>
      </footer>
    </div>
  );
}

export default App;