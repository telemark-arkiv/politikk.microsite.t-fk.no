'use strict'

const Wreck = require('wreck')
const sortName = require('../lib/sort-name')
const config = require('../config')
const pkg = require('../package.json')
const wreckOptions = {
  json: true
}

module.exports.showCommitties = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/committees', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      payload.sort(sortName)
      viewOptions.committees = payload
      reply.view('utvalg', viewOptions)
    }
  })
}

module.exports.showCommittee = (request, reply) => {
  const boardId = request.params.boardId
  const jobsTodo = 4
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
      reply.view('utvalget', viewOptions)
    }
  }

  Wreck.get(config.OPENGOV_MEETINGS_API_URL + '/meetings/next?limit=1&boardId=' + boardId, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.meetings = payload
    }
    allAboard()
  })

  Wreck.get(config.OPENGOV_MEETINGS_API_URL + '/meetings/previous?limit=5&boardId=' + boardId, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.previousMeetings = payload
    }
    allAboard()
  })

  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/committees/' + boardId, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.committees = payload
      allAboard()
    }
  })

  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/committees/' + boardId + '/members', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.members = payload
      allAboard()
    }
  })
}
