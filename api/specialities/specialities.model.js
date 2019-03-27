const mongoose = require('mongoose');

const { Schema } = mongoose;

const specialtiesSchema = new Schema({
  name: { type: Schema.Types.String },
  createdBy: { type: Schema.Types.Number },
  createdAt: { type: Schema.Types.Date },
  updatedBy: { type: Schema.Types.Number },
  updatedAt: { type: Schema.Types.Date },

});

const Specialties = mongoose.model('Specialties', specialtiesSchema);

module.exports.Specialties = Specialties;
