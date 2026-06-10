const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getColleges = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;

    const search = req.query.search || "";
    const location = req.query.location || "";
    const type = req.query.type || "";
    const rating = req.query.rating;

    const colleges = await prisma.college.findMany({
      where: {
        name: search
          ? {
              contains: search,
              mode: "insensitive",
            }
          : undefined,

        location: location || undefined,
        type: type || undefined,

        rating: rating
          ? {
              gte: Number(rating),
            }
          : undefined,
      },

      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        rating: "desc",
      },
    });

    res.json({
      colleges,
      nextPage:
        colleges.length === limit
          ? page + 1
          : null,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCollegeById = async (
  req,
  res
) => {
  try {
    const college =
      await prisma.college.findUnique({
        where: {
          id: req.params.id,
        },

        include: {
          courses: true,
          reviews: true,
          students: true,
        },
      });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.json(college);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
