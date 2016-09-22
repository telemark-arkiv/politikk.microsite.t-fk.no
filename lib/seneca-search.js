'use strict'

const results = [
  {
    title: 'Ole Nesebehn',
    type: 'politician',
    url: 'http://localhost:8000/politikere/218184'
  },
  {
    title: 'Kosepartiet, de skjønne',
    type: 'party',
    url: 'http://localhost:8000/partier/214617'
  },
  {
    title: 'Hovedutvalg for digitalisering',
    type: 'committee',
    url: 'http://localhost:8000/utvalg/218688'
  },
  {
    title: 'Hovedutvalg for digitalisering 12. september 2016',
    type: 'meeting',
    url: 'http://localhost:8000/agenda/57da5d328a1d2419315d88b1'
  }
]

module.exports = function senecaSearch (options) {
  const seneca = this

  seneca.add('role:search', (args, callback) => {
    callback(null, results)
  })

  return options.tag || 'seneca-search-politics'
}
