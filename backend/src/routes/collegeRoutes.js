const express =
  require("express");

const router =
  express.Router();

const {
  getColleges,
  getCollege,
} = require(
  "../controllers/collegeController"
);

router.get(
  "/",
  getColleges
);

router.get(
  "/:id",
  getCollege
);

module.exports = router;