const Pembayaran = require("../models/pembayaran");

module.exports = {
  index(req, res) {
    Pembayaran.find({ tampil: true })
      .populate("idanakkos")
      .exec()
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  findById(req, res) {
    Pembayaran.findOne({ _id: req.params.id, tampil: true })
      .populate("idanakkos")
      .exec()
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  store(req, res) {
    data = req.body;
    Pembayaran.create({
      idanakkos: data.idanakkos,
      bulan: data.bulan,
      tahun: data.tahun,
      tampil: true,
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
    Pembayaran.findByIdAndUpdate(
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
    Pembayaran.findByIdAndUpdate({ _id: req.params.id }, { tampil: false })
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
