const colleges =
  await prisma.college.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },

      location: location || undefined,

      rating: rating
        ? {
            gte: Number(rating),
          }
        : undefined,
    },

    skip: (page - 1) * 12,

    take: 12,
  });