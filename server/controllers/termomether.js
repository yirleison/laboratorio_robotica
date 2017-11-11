'use strict'

var five = require('johnny-five');
var board = require('../board');
var express = require('express');
var socket_io = require('../app');
var socket = socket_io.io;

var temperatura = "";

board.on('ready', function () {
    
    temperatura = new five.Temperature({ 
        controller:'dth11',
        pin: 'A0',
        type: 'analog',
        freq: 2000
    });
})

function temperature(collback) {

    temperatura.on('data', (data)=>{
       
        board.samplingInterval(1000);
        console.log(data);
        var t = 0;
         t = data.celsius.toString();
        
        return collback(t.substring(0,2) + "°C");
    });
}

module.exports = {
    temperature:temperature
}

