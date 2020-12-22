const Pengeluaran = require("../models/pengeluaran");

module.exports = {
  index(req, res) {
    Pengeluaran.find({ tampil: true })
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
    Pengeluaran.findOne({ _id: req.params.id, tampil: true })
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
    Pengeluaran.create({
      nama_pengeluaran: data.nama_pengeluaran,
      jenis_pengeluaran: data.jenis_pengeluaran,
      nominal: data.nominal,
      tanggal: Date.now(),
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
    Pengeluaran.findByIdAndUpdate(
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
    Pengeluaran.findByIdAndUpdate({ _id: req.params.id }, { tampil: false })
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
