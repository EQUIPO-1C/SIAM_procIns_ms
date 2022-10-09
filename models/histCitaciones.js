// import mongoose
const mongoose = require('mongoose');
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const histSchema = new Schema({
  idStudent: {
    type: mongoose.ObjectId,
    required: true
  },
  history: {
    type: [Date],
    required: true
  }
});
// export the model
const Hist = mongoose.model('HistCitas', histSchema);
module.exports = Hist;