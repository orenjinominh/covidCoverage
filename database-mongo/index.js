var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/covidDataByRace');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var covidDataByStateAndRaceSchema = mongoose.Schema({
  date: Number,
  state: String,
  deaths_total: Number,
  deaths_White: Number,
  deaths_Black: Number,
  deaths_LatinX: Number,
  deaths_Asian: Number,
  deaths_NHPI: Number,
  deaths_Multiracial: Number,
  deaths_Others: Number,
  deaths_Unknown: Number
});

var StateInfo = mongoose.model('stateInfo', covidDataByStateAndRaceSchema);

var selectAll = function(callback) {
  StateInfo.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;