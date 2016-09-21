'use strict'

module.exports = function senecaSearch (options) {
  const seneca = this

  seneca.add('role:search', (args, callback) => {
    callback(null, {success: true})
  })

  return options.tag || 'seneca-search-politics'
}
