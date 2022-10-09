// import mongoose
const mongoose = require('mongoose');
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const procInsSchema = new Schema({
  idStudent: {
    type: mongoose.ObjectId,
    required: true
  },
  fechaIns: {
    type: Date,
    required: true
  },
  materias:{
    type: [String],
    required: true
  },
  credTotales:{
    type: Number,
    required: true
  }
});
// export the model
const procInscri = mongoose.model('ProcIns', procInsSchema);
module.exports = procInscri;