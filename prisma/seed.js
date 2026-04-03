const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Pizzeria Napoli - Vollständige Speisekarte...');
  
  const products = [
    // ========== PIZZEN (7,00 €) ==========
    { name: 'Margherita', price: 7.00, category: 'Pizzen', ingredients: ['Tomatensauce', 'Mozzarella'], sortOrder: 1 },
    { name: 'Napoli', price: 7.00, category: 'Pizzen', ingredients: ['Sardellen', 'Oliven', 'Kapern'], sortOrder: 2 },
    { name: 'Spinat', price: 7.00, category: 'Pizzen', ingredients: ['Spinat', 'Knoblauch'], sortOrder: 3 },
    { name: 'Salami', price: 7.00, category: 'Pizzen', ingredients: ['Salami'], sortOrder: 4 },
    { name: 'Bolognese', price: 7.00, category: 'Pizzen', ingredients: ['Fleischsauce'], sortOrder: 5 },
    { name: 'Prosciutto', price: 7.00, category: 'Pizzen', ingredients: ['Schinken'], sortOrder: 6 },
    { name: 'Funghi', price: 7.00, category: 'Pizzen', ingredients: ['Champignons'], sortOrder: 7 },
    { name: 'Dalya', price: 7.00, category: 'Pizzen', ingredients: ['Sucuk', 'Zwiebel', 'Paprika', 'Peperoni'], sortOrder: 8 },
    { name: 'Quattro Formaggi', price: 7.00, category: 'Pizzen', ingredients: ['4 Käsesorten'], sortOrder: 9 },
    { name: 'Mista', price: 7.00, category: 'Pizzen', ingredients: ['Salami', 'Schinken', 'Champignons'], sortOrder: 10 },
    { name: 'Rustica', price: 7.00, category: 'Pizzen', ingredients: ['Salami', 'Peperoni', 'Weißkäse'], sortOrder: 11 },
    { name: 'Spaghetti', price: 7.00, category: 'Pizzen', ingredients: ['Spaghetti', 'Fleischsauce'], sortOrder: 12 },
    { name: 'Toscana', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Champignons'], sortOrder: 13 },
    { name: 'Hawaii', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Ananas'], sortOrder: 14 },
    { name: 'Marinara', price: 7.00, category: 'Pizzen', ingredients: ['Thunfisch', 'Zwiebeln'], sortOrder: 15 },
    { name: 'Tonno Spezial', price: 7.00, category: 'Pizzen', ingredients: ['Thunfisch', 'Champignons', 'Jalapenos'], sortOrder: 16 },
    { name: 'Dilem', price: 7.00, category: 'Pizzen', ingredients: ['Spinat', 'Krabben', 'Knoblauch'], sortOrder: 17 },
    { name: 'Calzone', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Salami', 'Zwiebeln', 'zugeklappt'], sortOrder: 18 },
    { name: 'Calzone Gyros', price: 7.00, category: 'Pizzen', ingredients: ['Gyros', 'Zwiebeln', 'Tzaziki', 'zugeklappt'], sortOrder: 19 },
    { name: 'Gyros', price: 7.00, category: 'Pizzen', ingredients: ['Gyros', 'Zwiebeln', 'Tzaziki'], sortOrder: 20 },
    { name: 'Gyros Spezial', price: 7.00, category: 'Pizzen', ingredients: ['Gyros', 'Zwiebeln', 'Sauce Hollandaise', 'Tzaziki'], sortOrder: 21 },
    { name: 'Athen', price: 7.00, category: 'Pizzen', ingredients: ['Gyros', 'Zwiebeln', 'Weißkäse', 'Peperoni', 'Tzaziki'], sortOrder: 22 },
    { name: 'Hollandaise', price: 7.00, category: 'Pizzen', ingredients: ['Hähnchenbrust', 'Champignons', 'Broccoli', 'Sauce Hollandaise'], sortOrder: 23 },
    { name: 'Destina', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Spinat', 'Oliven', 'Peperoni', 'Knoblauch'], sortOrder: 24 },
    { name: 'Parma e Rucola', price: 7.00, category: 'Pizzen', ingredients: ['Rucola', 'Parmesan', 'Parmaschinken'], sortOrder: 25 },
    { name: 'Capricciosa', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Champignons', 'Krabben'], sortOrder: 26 },
    { name: 'Quattro Stagioni', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Champignons', 'Paprika'], sortOrder: 27 },
    { name: 'Gaetano', price: 7.00, category: 'Pizzen', ingredients: ['Weißkäse', 'Spinat', 'Knoblauch'], sortOrder: 28 },
    { name: 'Salvatore', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Salami', 'Champignons', 'Paprika'], sortOrder: 29 },
    { name: 'Broccoli', price: 7.00, category: 'Pizzen', ingredients: ['Broccoli', 'Schinken', 'Sauce Hollandaise'], sortOrder: 30 },
    { name: 'Diavolo', price: 7.00, category: 'Pizzen', ingredients: ['Paprika', 'Salami', 'Peperoni', 'scharf'], sortOrder: 31 },
    { name: 'Valentino', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Spinat', 'Spiegelei'], sortOrder: 32 },
    { name: 'Mozzarella', price: 7.00, category: 'Pizzen', ingredients: ['Mozzarella', 'Tomaten', 'Oliven'], sortOrder: 33 },
    { name: 'Gamberetti', price: 7.00, category: 'Pizzen', ingredients: ['Krabben', 'Knoblauch'], sortOrder: 34 },
    { name: 'Mare', price: 7.00, category: 'Pizzen', ingredients: ['Krabben', 'Muscheln', 'Tintenfisch', 'Thunfisch', 'Knoblauch'], sortOrder: 35 },
    { name: 'Angela', price: 7.00, category: 'Pizzen', ingredients: ['Lachs', 'Spinat', 'Knoblauch'], sortOrder: 36 },
    { name: 'Vegetarisch', price: 7.00, category: 'Pizzen', ingredients: ['Champignons', 'Zwiebeln', 'Spinat', 'Broccoli', 'Paprika'], sortOrder: 37 },
    { name: 'Pizza Cico', price: 7.00, category: 'Pizzen', ingredients: ['Hähnchenbrust', 'Mais', 'Paprika'], sortOrder: 38 },
    { name: 'Pizza Hasslinghausen', price: 7.00, category: 'Pizzen', ingredients: ['Schinken', 'Thunfisch', 'Salami', 'Champignons', 'Paprika', 'Spinat', 'Peperoni', 'Zwiebeln', 'Knoblauch', 'scharf'], sortOrder: 39 },
    
    // ========== PIZZABRÖTCHEN ==========
    { name: 'Pizzabrötchen', price: 2.00, category: 'Pizzabrötchen', ingredients: ['6 Stück', 'Kräuterbutter oder Aioli'], sortOrder: 1 },
    { name: 'Gefüllte Pizzabrötchen mit Schinken', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Schinken'], sortOrder: 2 },
    { name: 'Gefüllte Pizzabrötchen mit Salami', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Salami'], sortOrder: 3 },
    { name: 'Gefüllte Pizzabrötchen mit Thunfisch', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Thunfisch'], sortOrder: 4 },
    { name: 'Gefüllte Pizzabrötchen mit Spinat & Weißkäse', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Spinat und Weißkäse'], sortOrder: 5 },
    { name: 'Gefüllte Pizzabrötchen mit Gyros', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Gyros'], sortOrder: 6 },
    { name: 'Gefüllte Pizzabrötchen mit Sucuk', price: 5.00, category: 'Pizzabrötchen', ingredients: ['6 Stück gefüllt mit Sucuk'], sortOrder: 7 },
    
    // ========== NUDELGERICHTE (7,00 €) ==========
    { name: 'Spaghetti Bolognese', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Spaghetti Napoli', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Tomatensauce'], sortOrder: 2 },
    { name: 'Spaghetti Carbonara', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Schinken', 'Sahne', 'Eigelb'], sortOrder: 3 },
    { name: 'Spaghetti Frutti di Mare', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Meeresfrüchte', 'Tomatensauce', 'Knoblauch'], sortOrder: 4 },
    { name: 'Spaghetti Aglio e Olio', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Knoblauch', 'Olivenöl', 'Peperoni'], sortOrder: 5 },
    { name: 'Spaghetti Fantasia', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Gemüsesorten', 'Tomatensauce'], sortOrder: 6 },
    { name: 'Spaghetti spezial', price: 7.00, category: 'Nudelgerichte', ingredients: ['Spaghetti', 'Spinat', 'Krabben', 'Sahnesauce', 'Knoblauch'], sortOrder: 7 },
    
    // ========== PENNE (7,00 €) ==========
    { name: 'Penne Bolognese', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Penne Quattro Formaggi', price: 7.00, category: 'Penne', ingredients: ['Penne', '4 Käsesorten', 'Sahne'], sortOrder: 2 },
    { name: 'Penne Pollo', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Hähnchenbrust', 'Champignons', 'Tomaten', 'Sahnesauce'], sortOrder: 3 },
    { name: 'Penne Al Salmone', price: 7.00, category: 'Penne', ingredients: ['Penne', 'Lachs', 'Krabben', 'Tomatensahnesauce', 'Knoblauch'], sortOrder: 4 },
    
    // ========== TORTELLINI (7,00 €) ==========
    { name: 'Tortellini Bolognese', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Fleischsauce'], sortOrder: 1 },
    { name: 'Tortellini Maison', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Schinken', 'Champignons', 'Sahne'], sortOrder: 2 },
    { name: 'Tortellini Panna', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Schinken', 'Sahnesauce'], sortOrder: 3 },
    { name: 'Tortellini Broccoli', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Broccoli', 'Schinken', 'Sahnesauce'], sortOrder: 4 },
    { name: 'Tortellini Spinat', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Schinken', 'Spinat', 'Sahnesauce'], sortOrder: 5 },
    { name: 'Tortellini spezial', price: 7.00, category: 'Tortellini', ingredients: ['Tortellini', 'Spinat', 'Krabben', 'Sahnesauce', 'Knoblauch'], sortOrder: 6 },
    
    // ========== AUS DEM OFEN (7,00 €) ==========
    { name: 'Lasagne', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Breite Nudeln', 'Fleischsauce', 'Schinken', 'Käse'], sortOrder: 1 },
    { name: 'Lasagne Broccoli', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Breite Nudeln', 'Broccoli', 'Fleischsauce', 'Schinken', 'Käse'], sortOrder: 2 },
    { name: 'Lasagne Funghi', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Breite Nudeln', 'Champignons', 'Fleischsauce', 'Käse'], sortOrder: 3 },
    { name: 'Macceroni al Forno', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Macceroni', 'Fleischsauce', 'Schinken', 'Ei', 'Käse'], sortOrder: 4 },
    { name: 'Tortellini al Forno', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Tortellini', 'Fleischsauce', 'Ei', 'Schinken', 'Käse'], sortOrder: 5 },
    { name: 'Combinazioni di Pasta', price: 7.00, category: 'Aus dem Ofen', ingredients: ['Gemischte Nudelsorten', 'Fleischsauce'], sortOrder: 6 },
    
    // ========== GEMÜSEAUFLAUF (7,00 €) ==========
    { name: 'Broccoli al Forno', price: 7.00, category: 'Gemüseauflauf', ingredients: ['Broccoli', 'Schinken', 'Sahnesauce', 'überbacken'], sortOrder: 1 },
    { name: 'Verdure al Forno', price: 7.00, category: 'Gemüseauflauf', ingredients: ['Spinat', 'Broccoli', 'Champignons', 'Sahnesauce', 'überbacken'], sortOrder: 2 },
    { name: 'Gemischte Gemüsesorten', price: 7.00, category: 'Gemüseauflauf', ingredients: ['Broccoli', 'Spinat', 'Paprika', 'Champignons', 'Tomatensauce', 'überbacken'], sortOrder: 3 },
    
    // ========== SALATE (7,00 €) ==========
    { name: 'Gemischter Salat', price: 7.00, category: 'Salate', ingredients: ['Grüner Salat', 'Gurken', 'Tomaten', 'Möhren', 'Mais'], sortOrder: 1 },
    { name: 'Italienischer Salat', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Ei', 'Schinken', 'Käse'], sortOrder: 2 },
    { name: 'Capricciosa Salat', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Thunfisch', 'Ei', 'Käse', 'Schinken'], sortOrder: 3 },
    { name: 'Greek Salat', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Ei', 'Weißkäse', 'Oliven'], sortOrder: 4 },
    { name: 'Insalata Rucola', price: 7.00, category: 'Salate', ingredients: ['Rucola', 'Tomaten', 'Parmesan', 'Essig', 'Öl'], sortOrder: 5 },
    { name: 'Salat Florenz', price: 7.00, category: 'Salate', ingredients: ['Tomaten', 'Mozzarella', 'Oliven', 'Essig', 'Öl'], sortOrder: 6 },
    { name: 'Salat Polo', price: 7.00, category: 'Salate', ingredients: ['Gemischter Salat', 'Weißkäse', 'Hähnchenbrust'], sortOrder: 7 },
    
    // ========== SCHNITZEL (8,00 €) ==========
    { name: 'Wiener Schnitzel', price: 8.00, category: 'Schnitzel', ingredients: ['Paniertes Schnitzel', 'Pommes', 'Salat', 'Zitrone'], sortOrder: 1 },
    { name: 'Schnitzel Jäger Art', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Jägersauce', 'Pommes', 'Salat'], sortOrder: 2 },
    { name: 'Schnitzel Zigeuner Art', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Zigeunersauce', 'Pommes', 'Salat'], sortOrder: 3 },
    { name: 'Schnitzel Hawaii', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Schinken', 'Ananas', 'Käse', 'Pommes', 'Salat'], sortOrder: 4 },
    { name: 'Schnitzel Bolognese', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Bolognesesauce', 'Käse', 'Pommes', 'Salat'], sortOrder: 5 },
    { name: 'Schnitzel Broccoli', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Broccoli', 'Sahnesauce', 'Käse', 'Pommes', 'Salat'], sortOrder: 6 },
    { name: 'Schnitzel Quattro Formaggi', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', '4 Käsesorten', 'Pommes', 'Salat'], sortOrder: 7 },
    { name: 'Schnitzel Hollandaise', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Hollandaise', 'Pommes', 'Salat'], sortOrder: 8 },
    { name: 'Schnitzel Hasslinghausen', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Paprika', 'Peperoni', 'Tomatensauce', 'Käse', 'Pommes', 'Salat'], sortOrder: 9 },
    { name: 'Rahm Schnitzel', price: 8.00, category: 'Schnitzel', ingredients: ['Schnitzel', 'Rahmsauce', 'Pommes', 'Salat'], sortOrder: 10 },
    
    // ========== GYROS (8,00 €) ==========
    { name: 'Gyros Teller', price: 8.00, category: 'Gyros', ingredients: ['Gyros aus Putenfleisch', 'Pommes', 'Salat', 'Tzaziki'], sortOrder: 1 },
    { name: 'Gyros überbacken', price: 8.00, category: 'Gyros', ingredients: ['Gyros', 'Zwiebeln', 'Paprika', 'Sahnesauce', 'Käse'], sortOrder: 2 },
    { name: 'Gyros Metaxasauce', price: 8.00, category: 'Gyros', ingredients: ['Gyros', 'Zwiebeln', 'Paprika', 'Metaxasauce', 'überbacken'], sortOrder: 3 },
    { name: 'Gyros Hollandaise', price: 8.00, category: 'Gyros', ingredients: ['Gyros', 'Zwiebeln', 'Paprika', 'Hollandaise', 'überbacken'], sortOrder: 4 },
    
    // ========== BEILAGEN ==========
    { name: 'Pommes', price: 2.00, category: 'Beilagen', ingredients: ['Pommes Frites'], sortOrder: 1 },
    { name: 'Chicken Nuggets', price: 5.00, category: 'Beilagen', ingredients: ['9 Stück', 'Süß/Sauer Sauce'], sortOrder: 2 },
    
    // ========== GETRÄNKE ==========
    { name: 'Cola', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 1 },
    { name: 'Cola 1,0l', price: 3.00, category: 'Getränke', ingredients: ['1,0 Liter'], sortOrder: 2 },
    { name: 'Fanta', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 3 },
    { name: 'Sprite', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 4 },
    { name: 'Wasser', price: 2.00, category: 'Getränke', ingredients: ['0,33l'], sortOrder: 5 },
    { name: 'Italienischer Wein', price: 6.00, category: 'Getränke', ingredients: ['0,70l'], sortOrder: 6 },
  ];

  // Alte Produkte löschen
  await prisma.product.deleteMany();
  
  // Neue Produkte einfügen
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  
  console.log(`✅ ${products.length} Produkte wurden eingefügt!`);
  console.log('📊 Kategorien:');
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const count = products.filter(p => p.category === cat).length;
    console.log(`   - ${cat}: ${count} Gerichte`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
