const moment = require('moment');
const { Specialties } = require('./specialities.model');

const services = {};

services.getAllPromises = () => new Promise((resolve, reject) => {
  Specialties.find({})
    .exec((err, specialties) => {
      if (err) {
        const error = {
          code: 400,
          msg: 'Error data',
          data: err,
        };
        return reject(error);
      }
      const response = {
        code: 200,
        data: specialties,
      };
      return resolve(response);
    });
});

services.getIdPromise = id => new Promise((resolve, reject) => {
  Specialties.findById(id)
    .exec((err, specialties) => {
      if (err) {
        const error = {
          code: 400,
          msg: 'Error data',
          data: err,
        };
        return reject(error);
      }
      const response = {
        code: 200,
        data: specialties,
      };
      return resolve(response);
    });
});

services.deleteSpecialtiesPromise = id => new Promise((resolve, reject) => {
  Specialties.findByIdAndRemove(id)
    .exec((err, specialties) => {
      if (err) {
        const error = {
          code: 400,
          msg: 'Error data',
          data: err,
        };
        return reject(error);
      }
      const response = {
        code: 200,
        msg: 'Speciality Delete success',
        data: specialties,
      };
      return resolve(response);
    });
});

services.createSpecialtiesPromise = data => new Promise((resolve, reject) => {
  const specialties = new Specialties({
    ...data,
    createdAt: moment().format(),
    updateAt: moment().format(),
  });
  Specialties.create(specialties)
    .exec((err, specialtiesDb) => {
      if (err) {
        const error = {
          code: 400,
          msg: 'Error data',
          data: err,
        };
        return reject(error);
      }
      const response = {
        code: 200,
        msg: 'Speciality Create success',
        data: specialtiesDb,
      };
      return resolve(response);
    });
});

services.UpdateSpecialtiesPromise = (id, data) => new Promise((resolve, reject) => {
  const specialties = new Specialties({
    ...data,
    updateAt: moment().format(),
  });

  Specialties.findByIdAndUpdate(id, specialties, { new: true }, (err, list) => {
    if (err) {
      return reject(err);
    }
    return resolve(list);
  });
});

module.exports = services;
