const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, restrictToRoles } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ restrictToRoles({ roles: ['admin', 'company'] }), associateCurrentUser() ],
    update: [ restrictToRoles({ roles: ['admin', 'company'] }), associateCurrentUser() ],
    patch: [ restrictToRoles({ roles: ['admin', 'company'] }), associateCurrentUser() ],
    remove: [ restrictToRoles({ roles: ['admin', 'company'] }) ]
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
