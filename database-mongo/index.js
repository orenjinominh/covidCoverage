var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/covidData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

let db = mongoose.connection;

const statPerState = require('./StateInfo.js');

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports.db = db;

