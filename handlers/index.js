'use strict'

const Wreck = require('wreck')
const config = require('../config')
const pkg = require('../package.json')
const wreckOptions = {
  json: true
}

function nameSort (a, b) {
  if (a.name < b.name)
    return -1
  if (a.name > b.name)
    return 1
  return 0
}

module.exports.showFrontpage = (request, reply) => {
  const jobsTodo = 3
  var jobsDone = 0
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }

  function allAboard () {
    jobsDone++
    if (jobsDone === jobsTodo) {
      reply.view('index', viewOptions)
    }
  }

  Wreck.get(config.OPENGOV_MEETINGS_API_URL + '/meetings/next?limit=5', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.meetings = payload
    }
    allAboard()
  })

  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/parties', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      payload.sort(nameSort)
      viewOptions.parties = payload
    }
    allAboard()
  })

  Wreck.get(config.OPENGOV_POLITICIANS_API_URL + '/committees', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      payload.sort(nameSort)
      viewOptions.committees = payload
    }
    allAboard()
  })
}

module.exports.showCalendar = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  Wreck.get(config.OPENGOV_MEETINGS_API_URL + '/meetings/next?limit=40', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.meetings = payload
      reply.view('kalender', viewOptions)
    }
  })
}

module.exports.showContact = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('kontakt', viewOptions)
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
      viewOptions.parties = payload
      reply.view('partier', viewOptions)
    }
  })
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

module.exports.showLegal = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('personvern', viewOptions)
}

module.exports.showAgenda = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  Wreck.get(config.OPENGOV_MEETINGS_API_URL + '/meetings/' + request.params.meetingId, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.meeting = payload[0]
      reply.view('agenda', viewOptions)
    }
  })
}

module.exports.showPolitician = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('politiker', viewOptions)
}
