'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.showFrontpage,
      description: 'Show frontpage'
    }
  },
  {
    method: 'GET',
    path: '/agenda/{meetingId}',
    config: {
      handler: handlers.showAgenda,
      description: 'Show agenda'
    }
  },
  {
    method: 'GET',
    path: '/kalender',
    config: {
      handler: handlers.showCalendar,
      description: 'Show calendar'
    }
  },
  {
    method: 'GET',
    path: '/kontakt',
    config: {
      handler: handlers.showContact,
      description: 'Show contacts'
    }
  },
  {
    method: 'GET',
    path: '/personvern',
    config: {
      handler: handlers.showLegal,
      description: 'Show legal'
    }
  },
  {
    method: 'GET',
    path: '/politikere/{politikerId}',
    config: {
      handler: handlers.showPolitician,
      description: 'Show politician'
    }
  }
]
