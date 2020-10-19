var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/covidData');

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

const statPerState = require('./statPerState.js');

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports.db = db;

