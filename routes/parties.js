'use strict'

const handlers = require('../handlers/parties')

module.exports = [
  {
    method: 'GET',
    path: '/partier',
    config: {
      handler: handlers.showParties,
      description: 'Show parties'
    }
  },
  {
    method: 'GET',
    path: '/partier/{partiId}',
    config: {
      handler: handlers.showParty,
      description: 'Show party'
    }
  }
]
