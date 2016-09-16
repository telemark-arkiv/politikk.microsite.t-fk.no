'use strict'

const tap = require('tap')
const routes = require('../../routes/committees')

tap.equal(routes.length, 2, 'There are 2 committees routes')
