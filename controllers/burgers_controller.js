//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var models = require('../models');


//when directed to Burger route, get burger.js logic, call functions within it. 
router.get('/', function(req, res) {
    models.Burger.findAll().then(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/', function(req, res) {
     models.Burger.create({
        burger_name: req.body.burger_name,
        devoured: 0
     }).then(function(){
    res.redirect("/");
     });
});

router.put('/:id', function(req, res) {
    //tableName, column, ID, callback
   models.Burger.update({
    devoured:1
    },{where:{
        id:req.params.id
    }}
   ).then(function(){
        res.redirect('/');
   });
});

router.delete('/:id', function(req, res) {
    //run burger.js logic of deleteOne(table,id,callback)
    models.Burger.destroy(
        {where:{
            id:req.params.id
        }}).then(function(){
            res.redirect("/");
        });
});

//initial load/direct
router.use(function(req, res) {
    res.redirect('/');
});
//export
module.exports = router;
