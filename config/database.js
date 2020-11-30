const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mirfanrafif:Aremania87@cluster0.b4gsh.mongodb.net/kosku",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
