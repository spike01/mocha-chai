var socket = function(io) {

  io.on('connection', function(){

  console.log('connected!')

  });
}

module.exports = socket;
