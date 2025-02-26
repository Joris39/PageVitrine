import React from "react";
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaMapMarkedAlt, FaDatabase, FaChartBar, FaCogs } from "react-icons/fa";
import './ProjetCarteRecharge.css'; // Assurez-vous d'avoir un fichier CSS pour les styles personnalisés

export function ProjetCarteRecharge() {
  return (
    <Container className="py-5 projet-container">
      <h1 className="projet-title text-center mb-5">Carte et Statistiques des Bornes de Recharge et des Stations Thermiques en France</h1>

      <Row className="mb-5">
        <Col md={8}>
          <h2 className="mb-4">Introduction</h2>
          <p>
            Ce projet semestriel, réalisé dans le cadre de la Licence 3 en Informatique à l'Université de Franche-Comté, vise à développer une application web permettant de visualiser et analyser les bornes de recharge électrique et les stations thermiques en France.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <img
            src="path/to/project-image.jpg"
            alt="Carte des bornes de recharge"
            className="img-fluid projet-image"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaMapMarkedAlt className="me-2" />Visualisation des Stations</Card.Title>
              <Card.Text>
                Utilisation de Leaflet et OpenStreetMap pour afficher les stations sur une carte interactive. Chaque station est représentée par un marqueur cliquable, offrant des informations détaillées.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaDatabase className="me-2" />Base de Données</Card.Title>
              <Card.Text>
                Centralisation et optimisation des données provenant de sources ouvertes comme OpenStreetMap et data.gouv.fr. Les données sont structurées pour permettre une recherche et une analyse efficaces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaChartBar className="me-2" />Statistiques</Card.Title>
              <Card.Text>
                Analyse des données pour fournir des statistiques sur la répartition des stations par région, l'évolution des prix des carburants, et les immatriculations de véhicules électriques.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaCogs className="me-2" />Fonctionnalités</Card.Title>
              <Card.Text>
                Gestion des comptes utilisateurs, ajout et modification de stations, et une interface administrateur pour la gestion des données.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Technologies Utilisées</h2>
          <div className="tech-badges">
            <Badge pill bg="primary">JavaScript</Badge>
            <Badge pill bg="secondary">Node.js</Badge>
            <Badge pill bg="success">React</Badge>
            <Badge pill bg="info">Leaflet</Badge>
            <Badge pill bg="warning">OpenStreetMap</Badge>
            <Badge pill bg="dark">Data.gouv.fr</Badge>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Conclusion</h2>
          <p>
            Ce projet a permis d'atteindre tous les objectifs fixés, offrant une solution complète pour la visualisation et l'analyse des bornes de recharge et des stations thermiques en France. Les évolutions futures pourraient inclure des fonctionnalités supplémentaires comme la gestion de comptes pour les gérants de stations.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjetCarteRecharge;
