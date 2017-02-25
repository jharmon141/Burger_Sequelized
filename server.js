var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var db = require("./models");

//serve up public folder and all content as static files to server.
app.use(express.static('public'));
//use bodyParser, do not encode url
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//require handlebars
var exphbs = require('express-handlebars');
//use handlebars engine as template engine, use 'main' as our base file
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//link to burger controller, set as default page"/"
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
//listen on port, if undefined, use 3000
app.listen(process.env.PORT || 3000);

db.sequelize.sync();
