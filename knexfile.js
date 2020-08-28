// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/earthmed.db3'
    },

    migrations: {
        directory: './data/migrations'
    },

    seeds: {
        directory: './data/seeds'
    },

    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
        }
    }
  },


  production: {
    client: 'pg',
    connection: process.env.DATA_BASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
