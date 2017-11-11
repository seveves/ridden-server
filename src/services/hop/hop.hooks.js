const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, queryWithCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');

const shuttleSchema = {
  include: {
    service: 'shuttles',
    nameAs: 'shuttle',
    parentField: 'shuttleId',
    childField: '_id'
  }
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ restrictToOwner(), queryWithCurrentUser() ],
    get: [ restrictToOwner(), queryWithCurrentUser() ],
    create: [ associateCurrentUser() ],
    update: [ restrictToOwner(), associateCurrentUser() ],
    patch: [ restrictToOwner(), associateCurrentUser() ],
    remove: [ restrictToOwner() ]
  },

  after: {
    all: [ populate({ schema: shuttleSchema }) ],
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
