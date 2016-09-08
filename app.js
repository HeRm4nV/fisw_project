var express = require('express');
var ip = require('ip');
var path = require('path');
var mysql = require('mysql');

var app= express();
var Usuario= require('./models/usuario.js');
var models = require("./models/index.js");

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);


app.use('/',require('./routes/router'));

//Routes
app.use('/api', require('./routes/api'));

var server = app.listen(3000, function () {
        var host = ip.address();
        var port = server.address().port;
        console.log('Este servidor pertenece a la ip %s y el puerto %s', host, port);
});