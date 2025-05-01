const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
