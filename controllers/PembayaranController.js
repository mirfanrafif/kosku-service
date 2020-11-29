const {Pembayaran} = require('../models')

module.exports = {
  index(req, res) {
    Pembayaran.findAll().then(function (rows) {
      res.json(rows)
    })
  },

  findById(req, res) {
    Pembayaran.findByPk(req.params.id).then(function (rows) {
      res.json(rows)
    })
  },

  store(req, res) {
    Pembayaran.create(req.body).then(function (rows) {
      res.json(rows)
    })
  },

  update(req, res) {
    Pembayaran.findByPk(req.params.id).then(function (rows) {
      rows.update(req.body);
      res.json(rows);
    })
  },

  destroy(req, res) {
    Pembayaran.findByPk(req.params.id).then(function (rows) {
      rows.destroy();
      res.json(rows);
    })
  }
}