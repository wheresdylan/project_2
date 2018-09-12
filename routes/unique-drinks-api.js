var db = require("../models");

module.exports = function(app) {
  app.get("/api/unique", function (req, res){
    db.Unique.findAll({}).then(function(dbUnique){
      res.json(dbUnique);
    });
  });

  app.post("/api/unique", function(req, res) {
    db.Unique.create(req.body).then(function(dbUnique) {
      res.json(dbUnique);
    });
  });
};