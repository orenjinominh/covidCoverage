const StateInfo = require('./StateInfo.js');

const getDataByState = (id, cb) => {
  console.log('inside db', id);
  state = this.toString();
  StateInfo.find({State: id}).exec((error, data) => {

    if (error) {
      return console.error(error);
    }

    // if (data.length === 0) {
    //   console.log('not found');
    // }

    cb(data);
  });
};

// const getDataByState = (state, cb) => {
//   state = this.toString();


//   StateInfo.find({state: state})
//   .limit(1)
//   .exec((err, res) => {
//     if (err) {
//       console.log('error retrieving from database');
//       cb(err);
//     } else {
//       cb(res);
//     }
//   });
// };
module.exports.getDataByState = getDataByState;