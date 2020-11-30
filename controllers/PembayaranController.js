const Pembayaran = require("../models/pembayaran");

module.exports = {
  index(req, res) {
    Pembayaran.find({})
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
    Pembayaran.findOne({ _id: req.params.id })
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
    Pembayaran.create(req.body)
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
    Pembayaran.findByIdAndDelete({ _id: req.params.id })
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
