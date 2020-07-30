const { db_host, db_name, db_user, db_pass } = require('../config');

module.exports = {
  development: {
    client: 'pg',
    //connection: 'postgres://postgres:@localhost:32768/kart_db',
    version: '7.2',
    connection: {
        host : db_host,
        user : db_user,
        password : db_pass,
        database : db_name
    },
    debug: true,
    migrations: {
      directory: __dirname + '/migrations'
    },
    /*seeds: {
      directory: __dirname + '/db/seeds/development'
    }*/
  },

  /*staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }*/

};
