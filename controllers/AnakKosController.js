const AnakKos = require("../models/anakkos");

module.exports = {
  index(req, res) {
    AnakKos.find({})
      .populate("idanakkos")
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  findById(req, res) {
    AnakKos.find({ _id: req.params.id })
      .populate("idanakkos")
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  store(req, res) {
    data = req.body;
    AnakKos.create({ ...data })
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
    AnakKos.findByIdAndDelete({ _id: req.params.id })
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
