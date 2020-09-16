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
  date: String,
  state: String,
  cases_total: String,
  cases_white: String,
  cases_black: String,
  cases_LatinX: String,
  cases_Asian: String,
  cases_AIAN: String,
  cases_NHPI: String,
  cases_Multiracial: String,
  cases_Others: String,
  cases_Unknown: String,
  cases_Ethnicity_Hispanic: String,
  cases_Ethnicity_NonHispanic: String,
  cases_Ethnicity_Unknown: String,
  deaths_total: String,
  deaths_White: String,
  deaths_Black: String,
  deaths_LatinX: String,
  deaths_Asian: String,
  deaths_NHPI: String,
  deaths_Multiracial: String,
  deaths_Others: String,
  deaths_Unknown: String,
  deaths_Ethnicity_Hispanic: String,
  deaths_Ethnicity_NonHispanic: String,
  deaths_Ethnicity_Unknown: String
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