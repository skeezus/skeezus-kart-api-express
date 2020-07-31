const { Model } = require('objection');
const db = require('../db/db');
const Password = require('objection-password')();

Model.knex(db)

class User extends Password(Model) { // https://itnext.io/express-knex-objection-painless-api-with-db-74512c484f0c
  static get tableName() {
    return 'users';
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);

    //console.log(this.password)
    //this.created_at = new Date().toISOString()
    //this.updated_at = new Date().toISOString()
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        email: { type: 'string', minLength: 1, maxLength: 150 },
        password: { type: 'string', minLength: 1, maxLength: 150 },
      }
    };
  }
}

module.exports = User;