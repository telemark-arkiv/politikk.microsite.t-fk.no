'use strict'

const routes = require('./routes')
const committees = require('./routes/committees')
const parties = require('./routes/parties')

exports.register = (server, options, next) => {
  server.route(routes)
  server.route(committees)
  server.route(parties)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
