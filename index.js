const express = require('express');
const cors = require('cors');
const { getProduits } = require('./db');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend API Azure en ligne !');
});

app.get('/produits', async (req, res) => {
  try {
    const produits = await getProduits();
    res.json(produits);
  } catch (error) {
    res.status(500).send('Erreur serveur');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));
