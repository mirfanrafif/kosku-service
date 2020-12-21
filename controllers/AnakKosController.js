const AnakKos = require("../models/anakkos");
const Pembayaran = require("../models/pembayaran");

module.exports = {
  index(req, res) {
    AnakKos.find({tampil: true})
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  findById(req, res) {
    AnakKos.findOne(
      { 
        _id: req.params.id,
        tampil: true
     }
     )
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  store(req, res) {
    data = req.body;
    AnakKos.create({ 
      nama: data.nama,
      asal: data.asal,
      nohp: data.nohp,
      tampil: true
     })
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    data = req.body;
    AnakKos.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: data },
      { new: true }
    )
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  destroy(req, res) {
    AnakKos.findOneAndUpdate({ _id: req.params.id }, {tampil: false})
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
