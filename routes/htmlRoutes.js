// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/home", function(req, res) {
    res.render("home");
  });

  //Load home page
  app.get("/cheap", function(req, res) {
    res.render("cheap");
  });

  app.get("/happyhour", function(req, res) {
    res.render("happyhour");
  });

  app.get("unique", function(req, res) {
    res.render("unique");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
