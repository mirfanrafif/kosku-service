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
    var data = req.body;
    Pembayaran.create({
      idanakkos: data.idanakkos,
      bulan: data.bulan,
      tahun: data.tahun,
      tampil: true,
    })
      .then((row) => {
        Pembayaran.findOne({ _id: row.id })
          .populate("idanakkos")
          .exec()
          .then((row) => {
            res.json(row);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    var data = req.body;
    Pembayaran.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: data },
      { new: true }
    )
      .then((rows) => {
        Pembayaran.findOne({ _id: rows.id })
          .populate("idanakkos")
          .exec()
          .then((row) => {
            res.json(row);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  },

  destroy(req, res) {
    Pembayaran.findByIdAndUpdate({ _id: req.params.id }, { tampil: false })
      .then((rows) => {
        Pembayaran.findOne({ _id: rows.id })
          .populate("idanakkos")
          .exec()
          .then((row) => {
            res.json(row);
          });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
