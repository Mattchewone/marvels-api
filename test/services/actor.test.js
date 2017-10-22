const assert = require('assert')
const app = require('../../src/app')

describe('\'actor\' service', () => {
  it('registered the service', () => {
    const service = app.service('actor')

    assert.ok(service, 'Registered the service')
  })
})
