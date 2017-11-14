'use strict'
var bodyParser = require('body-parser');
let app = require('express')();
let server = require('http').Server(app);
var io = require('socket.io')(server);
var d = require('./controllers/termomether');

io.on('connection', function (socket) {

    socket.on('new_message', function (data) {
        console.log("alguien se ha conectado");

        d.temperature(data => {
            socket.emit("new_message" , data);
        });

    });
});

// rutas 
var routeLeds = require('./routes/leds');
var routeTemperature = require('./routes/temperature');
// configuro las cabeceras http...

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/robot', routeLeds);
app.use('/robot', routeTemperature);

module.exports = {
    server,
    io
};