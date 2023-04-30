var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
    if(err) console.log('ERROR: Conectando a la BD: ' + err);
    else console.log('Conexión a la BD realizada');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', function(req, res) {
    res.send('Hola, Mundo!');
});

require('./routes')(app);

app.listen(5000);
console.log('Servidor Express escuchando em el puerto 5000');