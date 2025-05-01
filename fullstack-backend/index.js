const express = require('express');
const { getProduits } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  try {
    const produits = await getProduits();
    res.json(produits);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des produits.');
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
