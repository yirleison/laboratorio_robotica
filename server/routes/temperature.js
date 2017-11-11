'use strict'

var express = require('express');
var api = express.Router();
var temperatureController = require('../controllers/termomether');

api.post('/temperature', temperatureController.temperature);

module.exports = api;