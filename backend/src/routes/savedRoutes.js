const router =
  require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getSaved,
  saveCollege,
  removeSavedCollege,
} = require("../controllers/savedContoller");

router.use(authMiddleware);

router.get("/", getSaved);

router.post("/:id", saveCollege);

router.delete("/:id", removeSavedCollege);

module.exports = router;
