'use strict'

const handlers = require('../handlers/committees')

module.exports = [
  {
    method: 'GET',
    path: '/utvalg',
    config: {
      handler: handlers.showCommitties,
      description: 'Show committies'
    }
  },
  {
    method: 'GET',
    path: '/utvalg/{boardId}',
    config: {
      handler: handlers.showCommittee,
      description: 'Show committee'
    }
  }
]
