'use strict'

var five = require('johnny-five');
var board = require('../board');

var led1, led2, led3;
var color = "";

board.on('ready', function () {
    led1 = new five.Led(5);
    led2 = new five.Led(6);
    led3 = new five.Led(7);
});

function startLed(req, res) {

    var params = req.body;
    var led = params.led;
    var value = params.value;

    res.status(200).send({ res: encenderLed(led, value) });

};

var encenderLed = function (led, value) {

    if (led == 1 && value == 1) {
        led1.on();
        led1.blink(2000);
        return { led: led + ' encendido' };
    }

    if (led == 1 && value == 0) {
        led1.stop();
        led1.off();
        return { led: led, message: 'apagado' };
    }

    if (led == 2 && value == 1) {
        led2.on();
        led2.blink(2000);
        return { led: led, message: 'encendido' };
    }

    if (led == 2 && value == 0) {
        led2.stop();
        led2.off();
        return { led: led, message: 'apagado' };
    }

    if (led == 3 && value == 1) {
        led3.on();
        led3.blink(2000);
        return { led: led, message: 'encendido' };
    }

    if (led == 3 && value == 0) {
        led3.stop();
        led3.off();
        return { led: led, message: 'apagado' };
    }
}

function startRGB(req, res) {
    
    color = req.body.color;
    console.log(color);

    board.on('ready', () => {
        var led = new five.Led.RGB({

            pins: {
                red: 7,
                green: 8,
                blue: 9
            }
        });
        led.on();
        led.color(color);
        led.blink(1000);
    });
}

module.exports = {
    startLed
}