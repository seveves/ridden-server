const assert = require('assert');
const app = require('../../src/app');

describe('\'riderShuttles\' service', () => {
  it('registered the service', () => {
    const service = app.service('rider-shuttles');

    assert.ok(service, 'Registered the service');
  });
});
