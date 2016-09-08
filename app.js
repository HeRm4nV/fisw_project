var express = require('express');
var ip = require ('ip');
var app = express();
var router = require('./routes/router.js');
var models = require('./models/index.js');

app.set('views'.path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);

app.use('/', router);

models.sequelize.sync().then(function () { //{force:true} in sync for drop
    var server = app.listen(3000, function () {
        var host = ip.address();
        var port = server.address().port;
        console.log('Este servidor pertenece a la ip %s y el puerto %s', host, port);
    })
});

