var db = require("../models");

module.exports = function (app) {
  app.get("/api/happyhour", function (req, res) {
    db.HappyHour.findAll({}).then(function (dbHappyHour) {
      res.json(dbHappyHour);
    });
  });

  app.post("/api/happyhour", function (req, res) {
    db.HappyHour.create(req.body).then(function (dbHappyHour) {
      res.json(dbHappyHour);
    });
  });
};