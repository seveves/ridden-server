// Initializes the `hop` service on path `/hop`
const createService = require('feathers-mongoose');
const createModel = require('../../models/hop.model');
const hooks = require('./hop.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hop',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hop', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hop');

  service.hooks(hooks);
};
