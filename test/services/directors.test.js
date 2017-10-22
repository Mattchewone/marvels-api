const assert = require('assert')
const app = require('../../src/app')

describe('\'directors\' service', () => {
  it('registered the service', () => {
    const service = app.service('directors')

    assert.ok(service, 'Registered the service')
  })
})
