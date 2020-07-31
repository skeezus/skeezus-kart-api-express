const { Model } = require('objection');
const db = require('../db/db');

Model.knex(db)

class User extends Model { // https://itnext.io/express-knex-objection-painless-api-with-db-74512c484f0c
  static get tableName() {
    return 'users';
  }
}

module.exports = User;