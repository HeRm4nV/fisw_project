var express = require('express');
var ip = require('ip');
var app= express();
var router = require('./routes/router.js');

app.get('/',function(req,res){
    res.send('<h1> Hola Mundo </h1>');
})

app.use('/',router);

var server = app.listen(3000, function () {
        var host = ip.address();
        var port = server.address().port;
        console.log('Este servidor pertenece a la ip %s y el puerto %s', host, port);
});