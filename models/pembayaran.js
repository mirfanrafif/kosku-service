const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema(
  {
    idanakkos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnakKos",
    },
    bulan: {
      type: Number,
      required: true,
    },
    tahun: {
      type: Number,
      required: true,
    },
    tampil: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "pembayaran",
  }
);

module.exports = mongoose.model("Pembayaran", pembayaranSchema);
