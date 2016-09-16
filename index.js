'use strict'

const routes = require('./routes')
const committees = require('./routes/committees')

exports.register = (server, options, next) => {
  server.route(routes)
  server.route(committees)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
