const express = require('express');
const cors = require('cors');
const https = require('https');
const nodemailer = require('nodemailer');
const fs = require('fs');

require('dotenv').config();

const app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/jorisbaud.ddns.net/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/jorisbaud.ddns.net/fullchain.pem')
};


app.use(cors());
app.use(express.json());

// Configuration du transporteur avec Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test de la connexion
transporter.verify((error, success) => {
  if (error) {
    console.log('Erreur de configuration:', error);
  } else {
    console.log('Serveur prêt à envoyer des emails');
  }
});

// Route pour l'envoi d'emails
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio - Message de ${name}: ${subject}`,
    html: `
      <h3>Nouveau message de contact</h3>
      <p><strong>De:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur d\'envoi:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi de l\'email' 
    });
  }
});

const PORT = process.env.PORT || 3001;
https.createServer(options, app).listen(PORT, '0.0.0.0', () =>{
  console.log(`Serveur démarré sur le port ${PORT}`);
});
