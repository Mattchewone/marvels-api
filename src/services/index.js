const movies = require('./movies/movies.service.js')
const persons = require('./persons/persons.service.js')
const actors = require('./actors/actors.service.js')
const directors = require('./directors/directors.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(movies)
  app.configure(persons)
  app.configure(actors)
  app.configure(directors)
}
