'use strict';
var server = require('./app');


server.server.listen(3767, function(){
  console.log('servidor corriendo en https://localhost:3767');
});
