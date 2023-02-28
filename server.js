require("dotenv").config();
const express = require("express");
const db = require("./src/db/db");
const bodyParser = require("body-parser");
const cors = require("cors");

db;
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use("/api", require("./src/routes/userRouter"));

app.get("/", (req, res) => {
  res.send("Hello World.....!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server listening on", "http://localhost:" + PORT);
});
