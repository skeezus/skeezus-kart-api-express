var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile.js')[environment]

/*
 * https://itnext.io/express-knex-objection-painless-api-with-db-74512c484f0c
 * https://dev.to/aspittel/objection--knex--painless-postgresql-in-your-node-app--6n6
 * https://github.com/Fodark/express-knex-objection
 */

module.exports = require('knex')(config)