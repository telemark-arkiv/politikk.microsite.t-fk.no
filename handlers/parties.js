'use strict'

const Wreck = require('wreck')
const sortName = require('../lib/sort-name')
const config = require('../config')
const pkg = require('../package.json')
const wreckOptions = {
  json: true
}

module.exports.showParties = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/parties', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      payload.sort(sortName)
      viewOptions.parties = payload
      reply.view('partier', viewOptions)
    }
  })
}

module.exports.showParty = (request, reply) => {
  const jobsTodo = 2
  var jobsDone = 0
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  function allAboard () {
    jobsDone++
    if (jobsDone === jobsTodo) {
      reply.view('partiet', viewOptions)
    }
  }

  const partiUrl = `${config.OPENGOV_POLITICIANS_API_URL}/parties/${request.params.partiId}`
  Wreck.get(partiUrl, wreckOptions, (error, res, payload) => {
    if (error) {
      reply(error)
    } else {
      viewOptions.parties = payload
    }
    allAboard()
  })

  const membersUrl = `${config.OPENGOV_POLITICIANS_API_URL}/parties/${request.params.partiId}/members`
  Wreck.get(membersUrl, wreckOptions, (error, res, payload) => {
    if (error) {
      reply(error)
    } else {
      viewOptions.members = payload
    }
    allAboard()
  })
}
