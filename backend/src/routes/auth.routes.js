// routes/auth.routes.js

const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/register", authController.signup);
router.post("/login", authController.login);

module.exports = router;
