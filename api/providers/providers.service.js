const moment = require('moment');
const { Providers } = require('./providers.model');

const services = {};

services.getAllPromises = () => new Promise((resolve, reject) => {
  Providers.find({})
    .exec((err, providers) => {
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
        data: providers,
      };
      return resolve(response);
    });
});

services.getIdPromise = id => new Promise((resolve, reject) => {
  Providers.findById(id)
    .exec((err, providers) => {
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
        data: providers,
      };
      return resolve(response);
    });
});


services.deleteProviderPromise = id => new Promise((resolve, reject) => {
  Providers.findByIdAndRemove(id)
    .exec((err, providers) => {
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
        msg: 'Provider Delete success',
        data: providers,
      };
      return resolve(response);
    });
});

services.createProviderPromise = data => new Promise((resolve, reject) => {
  const providers = new Providers({
    ...data,
    createdAt: moment().format(),
    updateAt: moment().format(),
  });
  Providers.create(providers)
    .exec((err, providersDb) => {
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
        msg: 'Provider Create success',
        data: providersDb,
      };
      return resolve(response);
    });
});

services.UpdateProviderPromise = (id, data) => new Promise((resolve, reject) => {
  const providers ={
    ...data,
    updateAt: moment().format(),
  };
  Providers.findByIdAndUpdate(id, providers, { new: true }, (err, list) => {
    if (err) {
      return reject(err);
    }
    return resolve(list);
  });
});

module.exports = services;
