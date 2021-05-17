const express = require('express'); // express 모듈 추가하기

const app = express();
const port = 3000;
const path = require('path');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/html/index.html'));
});
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/fontawesome'));
app.use(express.static(__dirname + '/sass'));
app.use(express.static(__dirname + '/193 travel DOC'));
app.listen(port, function(err) {
  console.log('Connected port - ' + port);
  if (err) {
    return console.log('Found error - ', err);
  }
});
