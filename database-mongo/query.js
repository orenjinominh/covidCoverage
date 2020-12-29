const StateInfo = require('./StateInfo.js');

const getDataByState = (id, cb) => {

  StateInfo.find({state: id}).exec((err, data) => {

    if (err) {
      return console.error(err);
    }

    cb(data);
  });
};

module.exports.getDataByState = getDataByState;