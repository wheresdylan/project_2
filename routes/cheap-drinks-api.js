var db = require("../models");

module.exports = function(app) {
  app.get("/api/cheap", function (req, res){
    db.Cheap.findAll({}).then(function(dbCheap){
      res.json(dbCheap);
    });
  });

  app.post("/api/cheap", function(req, res) {
    db.Cheap.create(req.body).then(function(dbCheap) {
      res.json(dbCheap);
    });
  });
};