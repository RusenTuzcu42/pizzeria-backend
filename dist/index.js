"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 3001;
// Sicherheits-Header
app.use((0, helmet_1.default)());
// CORS nur für erlaubte Domains
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://pizzeria-frontend.vercel.app'
];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express_1.default.json());
// Rate Limiting für Bestellungen
const orderLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: { error: 'Zu viele Bestellungen. Bitte warte eine Stunde.' }
});
// Gesundheitscheck
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Alle Produkte
app.get('/api/products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { name: 'asc' }]
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Fehler beim Laden der Produkte' });
    }
});
// Bestellung aufgeben
app.post('/api/orders', orderLimiter, async (req, res) => {
    try {
        const { customerName, customerPhone, customerAddress, deliveryMethod, paymentMethod, items, total, notes } = req.body;
        // Validierung
        if (!customerName || customerName.length < 2 || customerName.length > 50) {
            return res.status(400).json({ error: 'Bitte geben Sie einen gültigen Namen ein (2-50 Zeichen).' });
        }
        if (!customerPhone || !/^[0-9+\-\s\/]{5,20}$/.test(customerPhone)) {
            return res.status(400).json({ error: 'Bitte geben Sie eine gültige Telefonnummer ein.' });
        }
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Ihr Warenkorb ist leer.' });
        }
        if (!total || total <= 0) {
            return res.status(400).json({ error: 'Ungültiger Gesamtbetrag.' });
        }
        const lastOrder = await prisma.order.findFirst({
            orderBy: { orderNumber: 'desc' }
        });
        const orderNumber = (lastOrder?.orderNumber || 0) + 1;
        const order = await prisma.order.create({
            data: {
                orderNumber,
                customerName,
                customerPhone,
                customerAddress: customerAddress || '',
                deliveryMethod: deliveryMethod || 'delivery',
                paymentMethod: paymentMethod || 'cash',
                total,
                notes: notes || '',
                items: JSON.stringify(items)
            }
        });
        res.json({ success: true, orderNumber: order.orderNumber });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fehler bei der Bestellung. Bitte versuchen Sie es später erneut.' });
    }
});
// Bestellstatus
app.get('/api/orders/:orderNumber', async (req, res) => {
    try {
        const order = await prisma.order.findUnique({
            where: { orderNumber: parseInt(req.params.orderNumber) }
        });
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Fehler beim Abrufen der Bestellung' });
    }
});
app.listen(PORT, () => {
    console.log(`🍕 Pizzeria Napoli API läuft auf Port ${PORT}`);
});
