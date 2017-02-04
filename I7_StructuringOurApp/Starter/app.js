var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

apiController(app);
htmlController(app);

app.listen(port);