const { discard, setByDot } = require('feathers-hooks-common')
const { shallowPopulate } = require('feathers-shallow-populate')

const getByDotDeep = function (obj, path) {
  return path.split('.').reduce((obj1, part) => {
    if (Array.isArray(obj1)) {
      return obj1.map(item => getByDotDeep(item, part))
    } else if (typeof obj1 === 'object') {
      return obj1[part]
    } else {
      return undefined
    }
  }, obj)
}

const mapResultData = function (from, to) {
  return function (context) {
    const { result } = context

    result.data.forEach(item => {
      const data = getByDotDeep(item, from)
      setByDot(item, to, data)
    })

    return Promise.resolve(context)
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      // Populate actors
      shallowPopulate({
        include: {
          service: 'actors',
          nameAs: 'actors',
          keyHere: 'actorIds',
          keyThere: 'actorId'
        }
      }),
      // Map personID
      mapResultData('actors.personId', 'actors'),
      // Populate person from actor
      shallowPopulate({
        include: {
          service: 'persons',
          nameAs: 'persons',
          keyHere: 'actors',
          keyThere: '_id'
        }
      }),
      // Remove temp join
      discard('actors')
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
