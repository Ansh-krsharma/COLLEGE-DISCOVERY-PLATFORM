const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const collegeRoutes = require(
  "./routes/collegeRoutes"
);

app.get("/", (_, res) => {
  res.json({
    message: "College Discovery API",
  });
});

app.use(
  "/api/colleges",
  collegeRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});