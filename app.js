const express = require("express");
const router = require("./config/router");
const cors = require("cors");

require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listen to port 3000");
});
