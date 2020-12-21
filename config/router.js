const express = require("express");
const routes = express.Router();

routes.use("/anakkos", require("../routes/AnakKosRoutes"));
routes.use("/pembayaran", require("../routes/PembayaranRouter"));
routes.use("/pengeluaran", require("../routes/PengeluaranRouter"));

module.exports = routes;
