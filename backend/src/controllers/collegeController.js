exports.getColleges = async (
  req,
  res
) => {
  try {
    const page =
      Number(req.query.page) || 1;

    const limit = 12;

    const search =
      req.query.search || "";

    const location =
      req.query.location || "";

    const rating =
      req.query.rating;

    const colleges =
      await prisma.college.findMany({
        where: {
          name: search
            ? {
                contains:
                  search,
                mode:
                  "insensitive",
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

        skip:
          (page - 1) * limit,

        take: limit,
      });

    res.json({
      colleges,

      nextPage:
        colleges.length ===
        limit
          ? page + 1
          : null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};