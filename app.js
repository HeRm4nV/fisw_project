var express = require('express');
var ip = require('ip');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app= express();
var Usuario= require('./models/usuario.js');
var models = require("./models/index.js");

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


app.use('/',require('./routes/router'));

//Express
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Start Server
models.sequelize.sync().then(function () {
	var server = app.listen(3000, function () {
        	var host = ip.address();
        	var port = server.address().port;
        	console.log('Este servidor pertenece a la ip %s y el puerto %s', host, port);
	});
});