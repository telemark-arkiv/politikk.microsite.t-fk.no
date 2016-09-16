'use strict'

const tap = require('tap')
const handlers = require('../../handlers/committees')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 committee handlers')

tap.ok(handlers.showCommittee, 'Handler has method showCommittee')

tap.ok(handlers.showCommitties, 'Handler has method showCommitties')
