const StateInfo = require('./StateInfo.js');

const getDataByState = (id, cb) => {
  console.log('inside db', id);
  state = this.toString();
  StateInfo.findOne(
    {State: id, Date: 20200913},
    {Date: 0, State: 0, _id: 0, Deaths_Total: 0}
    )
  .exec((error, data) => {

    if (error) {
      return console.error(error);
    }

    cb(data);
  });
};

module.exports.getDataByState = getDataByState;