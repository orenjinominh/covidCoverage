var express = require('express');
var bodyParser = require('body-parser');
var { getDataByState } = require('../database-mongo/query.js');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/chartByRace/:id', function (req, res) {

  getDataByState(req.params.id, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

