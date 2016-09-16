'use strict'

const tap = require('tap')
const handlers = require('../../handlers/parties')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 parties handlers')

tap.ok(handlers.showParties, 'Handler has method showParties')

tap.ok(handlers.showParty, 'Handler has method showParty')
