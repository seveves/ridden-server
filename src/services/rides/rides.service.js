// Initializes the `rides` service on path `/rides`
const createService = require('./rides.class.js');
const hooks = require('./rides.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');
  const ShuttleService = app.service('shuttles');

  const options = {
    name: 'rides',
    ShuttleService,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rides', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rides');

  service.hooks(hooks);
};
