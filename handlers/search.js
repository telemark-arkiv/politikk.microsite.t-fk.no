'use strict'

const pkg = require('../package.json')

module.exports.showSearchResults = (request, reply) => {
  const query = request.query
  const payload = request.payload
  const searchText = payload ? request.payload.searchText : query.searchText
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  request.seneca.act({role: 'search', query: searchText}, (error, data) => {
    reply(error || searchText)
  })
}
