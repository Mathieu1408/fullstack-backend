const express = require('express');
const { getProduits } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

// Route pour vérifier que le backend fonctionne
app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

// Nouvelle route pour afficher les produits
app.get('/produits', async (req, res) => {
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
