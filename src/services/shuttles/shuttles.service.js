// Initializes the `shuttles` service on path `/shuttles`
const createService = require('feathers-mongoose');
const createModel = require('../../models/shuttles.model');
const hooks = require('./shuttles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'shuttles',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/shuttles', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('shuttles');

  service.hooks(hooks);
};
