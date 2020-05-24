const db = require("../models");
// defining methods for googlebooksController
module.exports = {
    findAll: function(req, res) {
        db.googleBook
        // i wanna find something based on the query string
        .find(req.query)
        // a sort option
        .sort({ date: -1 })
        // if everything goes well we'll send back whatever model was asked for
        .then(dbModel => res.json(dbModel))
        // this is error
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.googleBook
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.googleBook
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.googleBook
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.googleBook
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
