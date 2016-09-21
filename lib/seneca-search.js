'use strict'

const results = [
  {
    title: 'Ole Nesebehn',
    type: 'politician',
    url: 'http://www.vg.no'
  }
]

module.exports = function senecaSearch (options) {
  const seneca = this

  seneca.add('role:search', (args, callback) => {
    callback(null, results)
  })

  return options.tag || 'seneca-search-politics'
}
