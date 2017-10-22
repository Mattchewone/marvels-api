// Initializes the `actors` service on path `/actors`
const createService = require('feathers-nedb')
const createModel = require('../../models/actors.model')
const hooks = require('./actors.hooks')
const filters = require('./actors.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'actors',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/actors', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('actors')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
