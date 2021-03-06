const knex = require('knex');

const knexConfig = require('../knexfile');

const enviornment = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfig[enviornment]);