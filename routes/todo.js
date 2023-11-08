const route = require('express').Router();
const controller = require('../controller/employmentController');

route.get('/health-check', controller.healthCheck);
route.get('/', controller.index);
route.get('/:id', controller.detail);
route.post('/create', controller.create);
route.delete('/', controller.delete)

module.exports = route;