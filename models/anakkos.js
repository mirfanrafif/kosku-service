const mongoose = require("mongoose");

const anakKosSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    asal: {
      type: String,
      required: true,
    },
    nohp: {
      type: String,
      required: true,
    },
    tampil: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "anakkos",
  }
);

module.exports = mongoose.model("AnakKos", anakKosSchema);
