'use strict'

const routes = require('./routes')
const committees = require('./routes/committees')
const parties = require('./routes/parties')
const search = require('./routes/search')

exports.register = (server, options, next) => {
  server.route(routes)
  server.route(committees)
  server.route(parties)
  server.route(search)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
