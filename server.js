const express = require('express');
const app = express();
const PORT = 3001;

app.use(require('cors')());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/products', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`API läuft auf Port ${PORT}`);
});
