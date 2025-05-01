const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend API is working on Azure!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
