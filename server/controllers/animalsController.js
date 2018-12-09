const db = require('../models');

//unsure if the species code below is correct, line 7? I referenced uncc class chap 20, activ 11
module.exports = {
  findAll: function(req, res) {
    db.Animal.find(req.query)
      .sort({ species: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Animal.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Animal.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Animal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Animal.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
