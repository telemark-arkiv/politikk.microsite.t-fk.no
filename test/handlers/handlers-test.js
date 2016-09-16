'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 6, 'There are 6 standard handlers')

tap.ok(handlers.showFrontpage, 'Handler has method showFrontpage')

tap.ok(handlers.showCalendar, 'Handler has method showCalendar')

tap.ok(handlers.showContact, 'Handler has method showContact')

tap.ok(handlers.showLegal, 'Handler has method showLegal')

tap.ok(handlers.showAgenda, 'Handler has method showAgenda')

tap.ok(handlers.showPolitician, 'Handler has method showPolitician')
