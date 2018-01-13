'use strict'

var five = require('johnny-five');
var board = require('../board');
var vandera = 1;
board.on("ready", function () {

  // Create a new `button` hardware instance.
  var button = new five.Button(2);

  var motor = new five.Motor({
    pin: 9
  });

  board.repl.inject({
    motor: motor
  });

  motor.on("start", function () {
    console.log("start", Date.now());

    // Demonstrate motor stop in 2 seconds
    /*board.wait(2000, function() {
      motor.stop();
    });*/
  });


  button.on("press", function () {
    motor.start();
  });

  button.on("release", function () {
    motor.stop();
  });

});