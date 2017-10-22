// Initializes the `directors` service on path `/directors`
const createService = require('feathers-nedb')
const createModel = require('../../models/directors.model')
const hooks = require('./directors.hooks')
const filters = require('./directors.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'directors',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/directors', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('directors')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
