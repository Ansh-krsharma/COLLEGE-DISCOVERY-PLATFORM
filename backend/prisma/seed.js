const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.savedCollege.deleteMany();
  await prisma.review.deleteMany();
  await prisma.student.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();

  const colleges = [
    {
      name: "Indian Institute of Technology Delhi",
      location: "Delhi",
      type: "Engineering",
      fees: 250000,
      rating: 4.8,
      established: 1961,
      averagePackage: 2100000,
      highestPackage: 8200000,
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A research-focused institute known for engineering, design, technology entrepreneurship, and strong placement outcomes.",
      courses: [
        { name: "Computer Science and Engineering", duration: "4 years" },
        { name: "Electrical Engineering", duration: "4 years" },
        { name: "Design", duration: "4 years" },
      ],
    },
    {
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai",
      type: "Engineering",
      fees: 240000,
      rating: 4.9,
      established: 1958,
      averagePackage: 2300000,
      highestPackage: 9000000,
      imageUrl:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A premier technical university with deep industry links, a vibrant campus culture, and highly competitive programs.",
      courses: [
        { name: "Computer Science and Engineering", duration: "4 years" },
        { name: "Mechanical Engineering", duration: "4 years" },
        { name: "Economics", duration: "4 years" },
      ],
    },
    {
      name: "National Institute of Technology Tiruchirappalli",
      location: "Tamil Nadu",
      type: "Engineering",
      fees: 180000,
      rating: 4.5,
      established: 1964,
      averagePackage: 1400000,
      highestPackage: 5200000,
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A nationally respected institute with strong engineering departments, active student clubs, and consistent placements.",
      courses: [
        { name: "Instrumentation and Control", duration: "4 years" },
        { name: "Civil Engineering", duration: "4 years" },
        { name: "Architecture", duration: "5 years" },
      ],
    },
    {
      name: "BITS Pilani",
      location: "Rajasthan",
      type: "Engineering",
      fees: 500000,
      rating: 4.7,
      established: 1964,
      averagePackage: 1850000,
      highestPackage: 6000000,
      imageUrl:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A private institute with flexible academics, strong alumni networks, and a well-known startup culture.",
      courses: [
        { name: "Electronics and Instrumentation", duration: "4 years" },
        { name: "Computer Science", duration: "4 years" },
        { name: "Pharmacy", duration: "4 years" },
      ],
    },
    {
      name: "VIT Vellore",
      location: "Tamil Nadu",
      type: "Engineering",
      fees: 220000,
      rating: 4.3,
      established: 1984,
      averagePackage: 900000,
      highestPackage: 4400000,
      imageUrl:
        "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A large private university offering broad program choice, global partnerships, and a technology-driven campus.",
      courses: [
        { name: "Information Technology", duration: "4 years" },
        { name: "Data Science", duration: "4 years" },
        { name: "Biotechnology", duration: "4 years" },
      ],
    },
    {
      name: "St. Stephen's College",
      location: "Delhi",
      type: "Arts",
      fees: 65000,
      rating: 4.6,
      established: 1881,
      averagePackage: 850000,
      highestPackage: 2200000,
      imageUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
      overview:
        "A historic liberal arts college known for economics, humanities, debate culture, and selective admissions.",
      courses: [
        { name: "Economics", duration: "3 years" },
        { name: "English", duration: "3 years" },
        { name: "History", duration: "3 years" },
      ],
    },
  ];

  for (const college of colleges) {
    await prisma.college.create({
      data: {
        ...college,
        courses: {
          create: college.courses,
        },
        students: {
          create: [
            { name: "Aarav Mehta" },
            { name: "Nisha Rao" },
            { name: "Kabir Sinha" },
          ],
        },
        reviews: {
          create: [
            {
              title: "Strong academics",
              comment:
                "The curriculum is demanding, but faculty support and peer learning make it worthwhile.",
              rating: college.rating,
            },
            {
              title: "Good career support",
              comment:
                "Placement preparation, alumni access, and student communities add a lot of value.",
              rating: Math.max(4, college.rating - 0.2),
            },
          ],
        },
      },
    });
  }

  console.log("Seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
