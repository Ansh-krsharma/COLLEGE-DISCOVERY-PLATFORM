const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getSaved = async (req, res) => {
  const saved = await prisma.savedCollege.findMany({
    where: {
      userId: req.user.userId,
    },
    include: {
      college: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(saved);
};

exports.saveCollege = async (req, res) => {
  const saved = await prisma.savedCollege.upsert({
    where: {
      userId_collegeId: {
        userId: req.user.userId,
        collegeId: req.params.id,
      },
    },
    update: {},
    create: {
      userId: req.user.userId,
      collegeId: req.params.id,
    },
    include: {
      college: true,
    },
  });

  res.status(201).json(saved);
};

exports.removeSavedCollege = async (req, res) => {
  await prisma.savedCollege.deleteMany({
    where: {
      userId: req.user.userId,
      collegeId: req.params.id,
    },
  });

  res.status(204).send();
};
