const express = require("express");
const router = require("./config/router");

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
