'use strict'

var express = require('express');
var api = express.Router();
var ledController = require('../controllers/leds');
var juego_leds = require('../controllers/juego_leds');

api.post('/start-led', ledController.startLed);
api.post('/juego-leds', juego_leds.prueba);

module.exports = api;

