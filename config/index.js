'use strict'

const envs = process.env

module.exports = {
  OPENGOV_MEETINGS_API_URL: envs.OPENGOV_MEETINGS_API_URL || 'https://opengov.api.t-fk.no',
  OPENGOV_POLITICIANS_API_URL: envs.OPENGOV_POLITICIANS_API_URL || 'https://politiker-api.t-fk.no',
  OPENGOV_POLITIKK_SERVER_PORT: envs.OPENGOV_POLITIKK_SERVER_PORT || 8000
}
