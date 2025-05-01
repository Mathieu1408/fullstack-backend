
const sql = require('mssql');

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

async function getProduits() {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM produits');
    return result.recordset;
  } catch (err) {
    console.error('Erreur SQL :', err);
    throw err;
  }
}

module.exports = { getProduits };
