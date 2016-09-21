'use strict'

const handlers = require('../handlers/search')

module.exports = [
  {
    method: 'GET',
    path: '/sok',
    config: {
      handler: handlers.showSearchResults,
      description: 'Show search results'
    }
  }
]
