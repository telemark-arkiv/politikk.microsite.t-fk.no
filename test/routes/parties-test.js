'use strict'

const tap = require('tap')
const routes = require('../../routes/parties')

tap.equal(routes.length, 2, 'There are 2 parties routes')
