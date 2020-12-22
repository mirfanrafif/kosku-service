const mongoose = require("mongoose");

const pengeluaranSchema = new mongoose.Schema(
  {
    nama_pengeluaran: {
      type: String,
      required: true,
    },
    jenis_pengeluaran: {
      type: String,
      required: true,
    },
    nominal: {
      type: Number,
      required: true,
    },
    tanggal: {
      type: Date,
      required: true,
    },
    tampil: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "pengeluaran",
  }
);

module.exports = mongoose.model("Pengeluaran", pengeluaranSchema);
