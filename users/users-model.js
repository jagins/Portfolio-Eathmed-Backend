const db = require('../data/db-config');

function add(user)
{
    return db('users').insert(user, 'id');
}

function findBy(email)
{
    return db('users').where({email});
}

module.exports = {
    add,
    findBy
}