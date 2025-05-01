// index.js
const express = require('express');
const { getProduits } = require('./db'); // assure-toi que ce fichier existe

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

app.get('/produits', async (req, res) => {
  try {
    const produits = await getProduits();
    res.json(produits);
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
