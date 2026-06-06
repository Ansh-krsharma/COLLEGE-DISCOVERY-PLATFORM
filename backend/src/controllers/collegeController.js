const {
  PrismaClient,
} = require(
  "@prisma/client"
);

const prisma =
  new PrismaClient();

exports.getColleges =
  async (
    req,
    res
  ) => {
    const {
      search,
      location,
      rating,
    } = req.query;

    const colleges =
      await prisma.college.findMany({
        where: {
          name: search
            ? {
                contains:
                  search,
                mode: "insensitive",
              }
            : undefined,

          location:
            location ||
            undefined,

          rating: rating
            ? {
                gte: Number(
                  rating
                ),
              }
            : undefined,
        },
      });

    res.json(colleges);
  };

exports.getCollege =
  async (
    req,
    res
  ) => {
    const college =
      await prisma.college.findUnique(
        {
          where: {
            id: req.params.id,
          },

          include: {
            courses: true,
            reviews: true,
          },
        }
      );

    res.json(college);
  };