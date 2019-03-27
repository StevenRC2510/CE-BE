const mongoose = require('mongoose');

const { Schema } = mongoose;

const providersSchema = new Schema({
  firstName: { type: Schema.Types.String },
  lastName: { type: Schema.Types.String },
  middleName: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  specialty: {
    _id: { type: Schema.Types.ObjectId, ref: 'Specialities' },
    name: { type: Schema.Types.String },
    createdBy: { type: Schema.Types.Number },
    createdAt: { type: Schema.Types.Date },
    updatedBy: { type: Schema.Types.Number },
    updatedAt: { type: Schema.Types.Date },
  },
  projectedStartDate: { type: Schema.Types.Date },
  employerId: { type: Schema.Types.Number },
  providerType: { type: Schema.Types.String },
  staffStatus: { type: Schema.Types.String },
  assignedTo: { type: Schema.Types.Number },
  status: { type: Schema.Types.String },
  createdBy: { type: Schema.Types.Number },
  createdAt: { type: Schema.Types.Date },
  updatedBy: { type: Schema.Types.Number },
  updatedAt: { type: Schema.Types.Date },
});

const Providers = mongoose.model('Providers', providersSchema);

module.exports.Providers = Providers;
