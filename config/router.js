const express = require('express')
const routes = express.Router()

routes.use("/anakkos", require("../routes/AnakKosRoutes"));
routes.use("/pembayaran", require("../routes/PembayaranRouter"));

module.exports = routes;