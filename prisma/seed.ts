import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Seed Products
  await prisma.products.createMany({
    data: [
      {
        id: uuidv4(),
        comercial_name: 'doggo',
        description: 'dispositivo de monitoreo de signos vitales',
        model: 'beta_1',
        stock: 3,
        price: 50.50,  // Precio con dos decimales
        create_at: new Date(),
        update_at: new Date()
      },
      {
        id: uuidv4(),
        comercial_name: 'kitty',
        description: 'dispositivo de monitoreo de actividad física',
        model: 'alpha_2',
        stock: 5,
        price: 75.00,  // Precio con dos decimales
        create_at: new Date(),
        update_at: new Date()
      },
      // Puedes añadir más productos aquí
    ],
  });

  console.log('Seed data created successfully');
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma Client at the end
    await prisma.$disconnect();
  });
