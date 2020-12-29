const StateInfo = require('./StateInfo.js');

const getDataByState = (id, cb) => {

  StateInfo.findOne({state: id, date: {$gt: 20200909} }).exec((err, data) => {

    if (err) {
      console.error(err);
    }
    cb(data);

  })
};

module.exports.getDataByState = getDataByState;