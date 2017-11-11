const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, queryWithCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ /*authenticate('jwt')*/ ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
