const express = require("express");
const router = require("./config/router");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI || "http://localhost", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listen to port 3000");
});
