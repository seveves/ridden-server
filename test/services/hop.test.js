const assert = require('assert');
const app = require('../../src/app');

describe('\'hop\' service', () => {
  it('registered the service', () => {
    const service = app.service('hop');

    assert.ok(service, 'Registered the service');
  });
});
