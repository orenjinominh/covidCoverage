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
  state: String,
  cases_total: Number,
  cases_white: Number,
  cases_black: Number,
  cases_LatinX: Number,
  cases_Asian: Number,
  cases_AIAN: Number,
  cases_NHPI: Number,
  cases_Multiracial: Number,
  cases_Others: Number,
  cases_Unknown: Number,
  cases_Ethnicity_Hispanic: Number,
  cases_Ethnicity_NonHispanic: Number,
  cases_Ethnicity_Unknown: Number,
  deaths_total: Number,
  deaths_White: Number,
  deaths_Black: Number,
  deaths_LatinX: Number,
  deaths_Asian: Number,
  deaths_NHPI: Number,
  deaths_Multiracial: Number,
  deaths_Others: Number,
  deaths_Unknown: Number,
  deaths_Ethnicity_Hispanic: Number,
  deaths_Ethnicity_NonHispanic: Number,
  deaths_Ethnicity_Unknown: Number
});

var stateInfo = mongoose.model('stateInfo', covidDataByStateAndRaceSchema);

var selectAll = function(callback) {
  stateInfo.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;