import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Pizzeria Napoli...');
  
  const products = [
    // ===== PIZZEN (7,00 €) =====
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
    { name: 'Parma e Rucola', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Parmaschinken', 'Rucola', 'Parmesan'], sortOrder: 11 },
    { name: 'Capricciosa', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Thunfisch', 'Champignons'], sortOrder: 12 },
    { name: 'Quattro Stagioni', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Thunfisch', 'Champignons', 'Paprika'], sortOrder: 13 },
    { name: 'Gaetano', price: 7.00, category: 'Pizzen', ingredients: ['Weißkäse', 'Spinat', 'Knoblauch'], sortOrder: 14 },
    { name: 'Salvatore', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Salami', 'Champignons', 'Paprika'], sortOrder: 15 },
    { name: 'Broccoli', price: 7.00, category: 'Pizzen', ingredients: ['Broccoli', 'Schinken', 'Sauce Hollandaise'], sortOrder: 16 },
    { name: 'Valentino', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Spinat', 'Spiegelei'], sortOrder: 17 },
    { name: 'Gamberetti', price: 7.00, category: 'Pizzen', ingredients: ['Krabben', 'Knoblauch'], sortOrder: 18 },
    { name: 'Mare', price: 7.00, category: 'Pizzen', ingredients: ['Krabben', 'Muscheln', 'Tintenfisch', 'Thunfisch', 'Knoblauch'], sortOrder: 19 },
    { name: 'Angela', price: 7.00, category: 'Pizzen', ingredients: ['Lachs', 'Spinat', 'Knoblauch'], sortOrder: 20 },
    { name: 'Pizza Cico', price: 7.00, category: 'Pizzen', ingredients: ['Hähnchenbrust', 'Mais', 'Paprika'], sortOrder: 21 },
    { name: 'Pizza Hasslinghausen', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Salami', 'Champignons', 'Paprika', 'Spinat', 'Peperoni', 'Zwiebeln', 'scharf'], sortOrder: 22 },
    
    // ===== NUDELGERICHTE (7,00 €) =====
    { name: 'Spaghetti Bolognese', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Spaghetti Napoli', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Tomatensauce'], sortOrder: 2 },
    { name: 'Spaghetti Carbonara', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Schinken', 'Sahne', 'Eigelb'], sortOrder: 3 },
    { name: 'Spaghetti Frutti di Mare', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Meeresfrüchte', 'Tomatensauce', 'Knoblauch'], sortOrder: 4 },
    { name: 'Spaghetti Aglio e Olio', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Knoblauch', 'Olivenöl', 'Peperoni'], sortOrder: 5 },
    
    // ===== PENNE (7,00 €) =====
    { name: 'Penne Bolognese', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Penne Quattro Formaggi', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Vier Käsesorten', 'Sahne'], sortOrder: 2 },
    { name: 'Penne Pollo', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Hähnchenbrust', 'Champignons', 'Tomaten', 'Sahnesauce'], sortOrder: 3 },
    { name: 'Penne Al Salmone', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Lachs', 'Krabben', 'Tomatensahnesauce', 'Knoblauch'], sortOrder: 4 },
    
    // ===== TORTELLINI (7,00 €) =====
    { name: 'Tortellini Bolognese', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Tortellini Maison', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Schinken', 'Champignons', 'Sahne'], sortOrder: 2 },
    { name: 'Tortellini Panna', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Schinken', 'Sahnesauce'], sortOrder: 3 },
    
    // ===== SCHNITZEL (8,00 €) =====
    { name: 'Wiener Schnitzel', price: 8.00, category: 'Schnitzel', ingredients: ['Paniertes Schnitzel', 'Pommes', 'Salat', 'Zitrone'], sortOrder: 1 },
    { name: 'Schnitzel Jäger Art', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Jägersauce', 'Pommes', 'Salat'], sortOrder: 2 },
    { name: 'Schnitzel Hawaii', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Schinken', 'Ananas', 'Käse überbacken'], sortOrder: 3 },
    { name: 'Schnitzel Bolognese', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Bolognesesauce', 'Käse überbacken'], sortOrder: 4 },
    { name: 'Schnitzel Broccoli', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Broccoli', 'Sahnesauce', 'Käse überbacken'], sortOrder: 5 },
    { name: 'Rahm Schnitzel', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Rahmsauce'], sortOrder: 6 },
    
    // ===== GYROS (8,00 €) =====
    { name: 'Gyros Teller', price: 8.00, category: 'Gyros', ingredients: ['Gyros aus Putenfleisch', 'Pommes', 'Salat', 'Tzaziki'], sortOrder: 1 },
    { name: 'Gyros überbacken', price: 8.00, category: 'Gyros', ingredients: ['Gyros', 'Zwiebeln', 'Paprika', 'Sahnesauce', 'Käse überbacken'], sortOrder: 2 },
    
    // ===== SALATE (7,00 €) =====
    { name: 'Gemischter Salat', price: 7.00, category: 'Salate', ingredients: ['Grüner Salat', 'Gurken', 'Tomaten', 'Möhren', 'Mais'], sortOrder: 1 },
    { name: 'Italienischer Salat', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Ei', 'Schinken', 'Käse'], sortOrder: 2 },
    { name: 'Greek Salat', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Ei', 'Weißkäse', 'Oliven'], sortOrder: 3 },
    
    // ===== GETRÄNKE (2,00 €) =====
    { name: 'Cola', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 1 },
    { name: 'Fanta', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 2 },
    { name: 'Sprite', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 3 },
    { name: 'Wasser', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 4 },
  ];
  
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  
  console.log(`✅ ${products.length} Produkte wurden eingefügt!`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
