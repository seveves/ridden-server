const users = require('./users/users.service.js');
const shuttles = require('./shuttles/shuttles.service.js');
const rides = require('./rides/rides.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(shuttles);
  app.configure(rides);
};
