'use strict'

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing require input')
  }

  return data.hits.hits.map((item) => item._source)
}
