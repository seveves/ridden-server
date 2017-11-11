const assert = require('assert');
const app = require('../../src/app');

describe('\'rides\' service', () => {
  it('registered the service', () => {
    const service = app.service('rides');

    assert.ok(service, 'Registered the service');
  });
});
