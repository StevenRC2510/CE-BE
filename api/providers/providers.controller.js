
const Services = require('./providers.service');


exports.getAll = (req, res) => {
  Services.getAllPromises()
    .then(response => res.status(response.code).json(response))
    .catch(error => res.json(error));
};

exports.getId = (req, res) => {
  const { id } = req.params;
  Services.getIdPromise(id)
    .then(response => res.status(response.code).json(response))
    .catch(error => res.json(error));
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Services.deleteProviderPromise(id)
    .then(response => res.status(response.code).json(response))
    .catch(error => res.json(error));
};

exports.create = (req, res) => {
  const { body } = req;
  Services.createProviderPromise(body)
    .then(response => res.status(response.code).json(response))
    .catch(error => res.json(error));
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  Services.UpdateProviderPromise(id, data)
    .then(response => res.status(response.code).json(response))
    .catch(error => res.json(error));
};
