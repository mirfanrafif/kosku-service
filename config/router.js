const express = require('express')
const routes = express.Router()

routes.use("/anakkos", require("../routes/AnakKosRoutes"));

module.exports = routes;