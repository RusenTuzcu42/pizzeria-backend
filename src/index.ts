import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/products', async (req, res) => {
  try {
    // Wichtig: Der Tabellenname "Product" muss in Anführungszeichen stehen!
    const result = await pool.query('SELECT * FROM "Product" ORDER BY category ASC, "sortOrder" ASC, name ASC');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Laden der Produkte' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, customerPhone, customerAddress, deliveryMethod, paymentMethod, items, total, notes } = req.body;
    const orderNumber = Math.floor(Math.random() * 1000000);
    
    const result = await pool.query(
      'INSERT INTO "Order" ("orderNumber", "customerName", "customerPhone", "customerAddress", "deliveryMethod", "paymentMethod", total, notes, items, "createdAt") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW()) RETURNING "orderNumber"',
      [orderNumber, customerName, customerPhone, customerAddress, deliveryMethod, paymentMethod, total, notes, JSON.stringify(items)]
    );
    
    res.json({ success: true, orderNumber: result.rows[0].orderNumber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler bei der Bestellung' });
  }
});

app.get('/api/orders/:orderNumber', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Order" WHERE "orderNumber" = $1', [parseInt(req.params.orderNumber)]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Bestellung nicht gefunden' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Bestellung' });
  }
});

app.listen(PORT, () => {
  console.log(`🍕 Pizzeria Napoli API läuft auf Port ${PORT}`);
});
