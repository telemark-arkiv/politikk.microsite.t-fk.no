'use strict'

module.exports.showSearchResults = (request, reply) => {
  request.seneca.act({role: 'search'}, (error, data) => {
    reply(error || data)
  })
}
