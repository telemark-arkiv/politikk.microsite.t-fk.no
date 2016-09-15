'use strict'

const tap = require('tap')
const routes = require('../../routes/')

tap.equal(routes.length, 9, 'There are 9 standard routes')
