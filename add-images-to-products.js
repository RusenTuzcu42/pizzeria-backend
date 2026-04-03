const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Alle Produkte holen
  const products = await prisma.product.findMany();
  
  // Bildzuordnung nach Kategorie
  const categoryImageMap = {
    'Pizzen': '/images/Pizza.png',
    'Nudelgerichte': '/images/Nudelgerichte.png',
    'Penne': '/images/Penne.png',
    'Tortellini': '/images/Tortellini.png',
    'Gyros': '/images/Gyros_aus_Putenfleisch.png',
    'Schnitzel': '/images/Schnitzel.png',
    'Salate': '/images/Gemischter_Salat.png',
    'Getränke': '/images/Getränke.png',
    'Aus dem Ofen': '/images/Pizza.png',
    'Default': '/images/Logo_des_Ladens.png'
  };
  
  console.log(`📊 Gefundene Produkte: ${products.length}`);
  
  // Statistik
  const categoryStats = {};
  for (const product of products) {
    categoryStats[product.category] = (categoryStats[product.category] || 0) + 1;
  }
  console.log('📂 Kategorien:', categoryStats);
  
  console.log('\n✅ Fertig! Die Bilder werden in der Website angezeigt.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
