const {AnakKos} = require('../models')

module.exports = {
  index(req, res) {
    AnakKos.findAll().then(function (rows) {
      res.json(rows);
    })
  },
  
  findById(req, res) {
    AnakKos.findByPk(req.params.id).then(function (rows) {
      res.json(rows);
    });
  },

  store(req, res) {
    AnakKos.create(req.body).then(function(rows) {
      res.json(rows);
    })
  },

  update(req, res) {
    AnakKos.findByPk(req.params.id).then(function (rows) {
      rows.update(req.body);
      res.json(rows);
    })
  },

  destroy(req, res) {
    AnakKos.findByPk(req.params.id).then(function (rows) {
      rows.destroy();
      res.json(rows);
    })
  }
}