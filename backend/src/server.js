const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "College Discovery API"
  });
});

const PORT = process.env.PORT || 5000;
const collegeRoutes =
  require(
    "./routes/collegeRoutes"
  );
  app.use(
  "/api/colleges",
  collegeRoutes
);

app.use(
  "/api/saved",
  savedRoutes
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});