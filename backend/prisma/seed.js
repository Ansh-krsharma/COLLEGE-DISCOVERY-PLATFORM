const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.8,
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 240000,
        rating: 4.9,
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.5,
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 500000,
        rating: 4.7,
      },
      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 220000,
        rating: 4.3,
      },
    ],
  });

  console.log("Seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());