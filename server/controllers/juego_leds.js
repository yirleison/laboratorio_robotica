'use strict'

var five = require('johnny-five');
var board = require('../board');
var express = require('express');
var temporal = require("temporal");

var leds;
var button;
var estado = 1;

board.on('ready', function () {
    leds = new five.Leds([3,4,5]);

});


function secuencia_uno() {
    for(var i = 0; i < leds.length; i++){
        leds[i].on();
        setTimeout(function() {
            leds[i].off();
        }, 500);
    }
}

function secuencia_dos() {
    var t;
    for (var i = 3; i > arrayLed.length; i--) {
        arrayLed[i].on();
        t = arrayLed[i];
        temporal.delay(1000, () => {
            t.off();
        });
    }
}



function prueba() {
   secuencia_uno();
}

function pressButton() {
    button.on("press", () => {
        if (estado == 1) {
            loopLeds();
            console.log(estado);
            estado = 0;
        } else {
            console.log(estado);
            loopLedsOff();
            estado = 1;
        }

    });
}



module.exports = {
    pressButton,
    prueba
}