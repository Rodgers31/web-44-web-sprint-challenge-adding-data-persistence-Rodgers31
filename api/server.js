// build your server here and require it from index.js

const express = require('express');
const projectRouters = require('./project/router.js');
const resourcesRouter = require('./resource/router.js');

const server = express();
server.use(express.json());
server.use('/api/projects', projectRouters);
server.use('/api/resources', resourcesRouter);

module.exports = server;
