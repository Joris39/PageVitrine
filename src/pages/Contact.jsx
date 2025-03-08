import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://jorisbaud.ddns.net:3001/api/contact';

    setStatus({
      type: "info",
      message: "Envoi en cours..."
    });

    console.log('Tentative de connexion à:', API_URL);
      
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Statut de la réponse:', response.status);

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur détaillée:', error);
      setStatus({
        type: "danger",
        message: "Une erreur est survenue lors de l'envoi du message : " + error.message
      });
    }
  };

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <Container className="contact-container my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
        <Card className="contact-card shadow-lg border-0" data-aos="fade-up">
            <Card.Body className="p-5">
              <h2 className="text-center fw-bold mb-4">Contactez-moi</h2>
              <p className="text-center text-muted mb-5">
                N'hésitez pas à me contacter pour toute question ou proposition de collaboration.
              </p>

              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <div className="input-group input-group-lg">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <div className="input-group input-group-lg">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Votre email"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    size="lg"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Votre message..."
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-100 submit-button"
                >
                  <FaPaperPlane className="me-2" />
                  Envoyer le message
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="contact-info-card mt-5 border-0 shadow-sm" data-aos="fade-up">
            <Card.Body className="p-4">
              <h3 className="text-center fw-bold mb-4">Autres moyens de me contacter</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="icon text-primary" />
                  <span>jorisbaud39@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="icon text-primary" />
                  <span>22 rue de Lattre de Tassigny, 39110, Andelot en Montagne</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="icon text-primary" />
                  <span>07.85.86.05.13</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
