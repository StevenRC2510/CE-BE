/**
 * Main application routes
 */
const errors = require('../components/errors');

// Import Endpoints

const providers = require('../api/providers');
const specialities = require('../api/specialities');




module.exports = (app) => {
  // Insert routes below
  app.use('/api/v1/providers', providers);
  app.use('/api/v1/specialities', specialities);


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);
};
