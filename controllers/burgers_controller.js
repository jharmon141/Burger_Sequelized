var express = require("express");

var router = express.Router();

var db = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbburger) {
      res.json(dbburger);
    });
});

router.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
    }).then(function(dbburger) {
      res.json(dbburger);
    });
});

router.put("/:id", function(req, res) {
 db.Burger.update({
    devoured:1
    },{where:{
        id:req.params.id
    }}
   ).then(function(){
        res.redirect('/burgers');
   });
});

router.delete("/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbburger) {
      res.json(dbburger);
    });
});

// Export routes for server.js to use.
module.exports = router;
