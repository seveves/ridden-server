const assert = require('assert');
const app = require('../../src/app');

describe('\'shuttles\' service', () => {
  it('registered the service', () => {
    const service = app.service('shuttles');

    assert.ok(service, 'Registered the service');
  });
});
