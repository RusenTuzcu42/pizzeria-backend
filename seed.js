const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    // Pizzen
    { name: 'Margherita', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Basilikum'], sortOrder: 1 },
    { name: 'Salami', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Salami'], sortOrder: 2 },
    { name: 'Funghi', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Champignons'], sortOrder: 3 },
    { name: 'Hawaii', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Ananas'], sortOrder: 4 },
    { name: 'Quattro Formaggi', price: 7.00, category: 'Pizzen', ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Ricotta'], sortOrder: 5 },
    { name: 'Tonno', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Thunfisch', 'Zwiebeln'], sortOrder: 6 },
    { name: 'Prosciutto', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken'], sortOrder: 7 },
    { name: 'Vegetariana', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Paprika', 'Zwiebeln', 'Oliven'], sortOrder: 8 },
    { name: 'Diavolo', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Salami', 'Peperoni', 'scharf'], sortOrder: 9 },
    { name: 'Calzone', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Champignons', 'zugeklappt'], sortOrder: 10 },
    // Nudelgerichte
    { name: 'Spaghetti Bolognese', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Spaghetti Carbonara', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Schinken', 'Sahne', 'Eigelb'], sortOrder: 2 },
    { name: 'Penne Bolognese', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Tortellini Bolognese', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Fleischsauce'], sortOrder: 1 },
    // Schnitzel
    { name: 'Wiener Schnitzel', price: 8.00, category: 'Schnitzel', ingredients: ['Paniertes Schnitzel', 'Pommes', 'Salat'], sortOrder: 1 },
    { name: 'Schnitzel Jäger Art', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Jägersauce', 'Pommes', 'Salat'], sortOrder: 2 },
    // Gyros
    { name: 'Gyros Teller', price: 8.00, category: 'Gyros', ingredients: ['Gyros', 'Pommes', 'Salat', 'Tzaziki'], sortOrder: 1 },
    // Salate
    { name: 'Gemischter Salat', price: 7.00, category: 'Salate', ingredients: ['Grüner Salat', 'Gurken', 'Tomaten', 'Möhren'], sortOrder: 1 },
    // Getränke
    { name: 'Cola', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 1 },
    { name: 'Fanta', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 2 },
    { name: 'Sprite', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 3 },
    { name: 'Wasser', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 4 },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  console.log(`✅ ${products.length} Produkte eingefügt!`);
}

main().catch(console.error);
