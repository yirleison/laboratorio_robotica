'use strict'

var five = require('johnny-five');
var board = require('../board');
var express = require('express');
var socket_io = require('../app');
var socket = socket_io.io;
var hygrometer;
var temperatura = "";

board.on("ready", function () {

    hygrometer = new five.Thermometer({
        controller: 'DHT11',
        pin: "A0"
    });
});




function temperature(collback) {
    hygrometer.on("change", function (data) {
    
        board.loop(100, ()=>{
            console.log("temperature");
            console.log("  celsius           : ", this.celsius);
            console.log("  fahrenheit        : ", this.fahrenheit);
            console.log("  kelvin            : ", this.kelvin);
            console.log("--------------------------------------");
        })
        var t = data.celsius;
        return collback(t);
    });

}

module.exports = {
    temperature: temperature
}

