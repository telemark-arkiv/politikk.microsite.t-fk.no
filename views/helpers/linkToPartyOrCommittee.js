'use strict'

module.exports = (context) => {
  if (context.data.root.politicians[0].committees[context.data.index].role === 'Parti') {
    return 'partier'
  } else {
    return 'utvalg'
  }
}
