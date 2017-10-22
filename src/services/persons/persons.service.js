// Initializes the `persons` service on path `/persons`
const createService = require('feathers-nedb')
const createModel = require('../../models/persons.model')
const hooks = require('./persons.hooks')
const filters = require('./persons.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'persons',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/persons', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('persons')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
