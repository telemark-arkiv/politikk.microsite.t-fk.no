'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 7, 'There are 7 standard handlers')

tap.ok(handlers.showFrontpage, 'Handler has method showFrontpage')

tap.ok(handlers.showCalendar, 'Handler has method showCalendar')

tap.ok(handlers.showContact, 'Handler has method showContact')

tap.ok(handlers.showParties, 'Handler has method showParties')

tap.ok(handlers.showCommitties, 'Handler has method showCommitties')

tap.ok(handlers.showLegal, 'Handler has method showLegal')

tap.ok(handlers.showAgenda, 'Handler has method showAgenda')
