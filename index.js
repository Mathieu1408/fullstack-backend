const express = require('express');
const { getProduits } = require('./db');
const app = express();

// Route de test
app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

app.get('/api/produits', async (req, res) => {
  try {
    const produits = await getProduits();
    res.json(produits);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la récupération des produits');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
