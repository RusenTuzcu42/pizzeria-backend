"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const prisma = new client_1.PrismaClient();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
// Gesundheitscheck
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Alle Produkte
app.get('/api/products', async (req, res) => {
    const products = await prisma.product.findMany({
        where: { isAvailable: true },
        orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { name: 'asc' }]
    });
    res.json(products);
});
// Bestellung aufgeben
app.post('/api/orders', async (req, res) => {
    const { customer, items, deliveryMethod, paymentMethod, specialRequests } = req.body;
    const lastOrder = await prisma.order.findFirst({ orderBy: { orderNumber: 'desc' } });
    const orderNumber = (lastOrder?.orderNumber || 0) + 1;
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = deliveryMethod === 'delivery' && subtotal < 10 ? 2.5 : 0;
    const total = subtotal + deliveryFee;
    const order = await prisma.order.create({
        data: {
            orderNumber,
            customerName: customer.name,
            customerPhone: customer.phone,
            customerAddress: customer.address,
            customerEmail: customer.email,
            deliveryMethod,
            paymentMethod,
            subtotal,
            deliveryFee,
            total,
            specialRequests,
            items: { create: items.map((item) => ({
                    productId: item.productId,
                    productName: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    notes: item.notes
                })) }
        },
        include: { items: true }
    });
    res.json({ success: true, order, orderNumber });
});
// Bestellung verfolgen
app.get('/api/orders/:orderNumber', async (req, res) => {
    const order = await prisma.order.findUnique({
        where: { orderNumber: parseInt(req.params.orderNumber) },
        include: { items: { include: { product: true } } }
    });
    order ? res.json(order) : res.status(404).json({ error: 'Bestellung nicht gefunden' });
});
app.listen(PORT, () => console.log(`🍕 Pizzeria Napoli API läuft auf Port ${PORT}`));
