var mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

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

var stateInfo = mongoose.model('stateInfo', covidDataByStateAndRaceSchema);

const getDataByState = (id, cb) => {

  stateInfo.findOne({state: id, date: {$gt: 20200909} }).exec((err, data) => {
    if (err) {
      console.log('Could not get any data from DB.');
      return err;
    };

    cb(data);
  });
};

module.exports.getDataByState = getDataByState;