'use strict'

const Wreck = require('wreck')
const config = require('../config')
const repackSearchResults = require('./repack-search-results')
const wreckOptions = {
  json: true
}

module.exports = function senecaSearch (options) {
  const seneca = this

  seneca.add('role:search', (args, callback) => {
    const searchUrl = `${config.OPENGOV_SEARCH_API_URL}/api/search?query=${args.query}`
    Wreck.get(searchUrl, wreckOptions, (error, response, payload) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, repackSearchResults(payload))
      }
    })
  })

  return options.tag || 'seneca-search-politics'
}
