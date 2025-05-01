const express = require('express');
const sql = require('mssql');

const app = express();

// Configuration de la base de données Azure SQL
const config = {
  user: 'azureuser',
  password: 'Azerty01!',
  server: 'fullstack-sqlserver.database.windows.net',
  database: 'FullStackDB',
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// Route de test (racine)
app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

// Route pour récupérer les produits
app.get('/api/produits', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM produits');
    res.json(result.recordset);
  } catch (err) {
    console.error('Erreur SQL :', err);
    res.status(500).send('Erreur lors de la récupération des produits');
  }
});

// ⚠️ Port dynamique pour Azure
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
