const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

const companiesRouter = require('./companies/companies-router');
const productsRouter = require('./products/products-router');
const authRouter = require('./auth/auth-router');

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/companies', companiesRouter);
server.use('/api/products', productsRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({message: 'Eathmed API is up and running'})
});

module.exports = server;