'use strict'

const Hapi = require('hapi')
const Chairo = require('chairo')
const Seneca = require('seneca')()
const vision = require('vision')
const inert = require('inert')
const server = new Hapi.Server()
const config = require('./config')
const politiciansService = require('./index')
const senecaSearch = require('./lib/seneca-search')

server.connection({
  port: config.OPENGOV_POLITIKK_SERVER_PORT
})

const plugins = [
  {register: Chairo, options: {seneca: Seneca}},
  {register: vision},
  {register: inert},
  {register: politiciansService}
]

server.register(plugins, error => {
  if (error) {
    console.error('Failed to load a plugin:', error)
  }

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views',
    helpersPath: 'views/helpers',
    partialsPath: 'views/partials',
    layoutPath: 'views/layouts',
    layout: true,
    compileMode: 'sync'
  })

  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    },
    config: {
      auth: false
    }
  })

  server.seneca.use(senecaSearch)
})

module.exports.start = () => {
  server.start(() => {
    console.log('Server running at:', server.info.uri)
  })
}

module.exports.stop = () => {
  server.stop(() => {
    console.log('Server stopped')
  })
}
