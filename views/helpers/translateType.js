'use strict'

module.exports = (type) => {
  switch (type) {
    case 'politician':
      return 'Politiker'
    case 'party':
      return 'Parti'
    case 'meeting':
      return 'Utvalgsmøte'
    case 'committee':
      return 'Utvalg'
    default:
      return 'Ukjent'
  }
}
