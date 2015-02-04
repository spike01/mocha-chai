var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser')
var io = require('socket.io')(server);
var socket = require('./socket.js')(io);

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.send('<h1>Hello world</h1>');
});

app.get('/socket', function(request, response){
  response.render('socket');
});


var port = process.env.PORT || 3000

server.listen(port, function(){
  console.log("Server running on port" + port);
});

//module.exports = server;
