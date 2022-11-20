const express = require('express');
const { getConsumers, addConsumer, updateConsumer, deleteConsumer } = require('../Controllers/consumers.controllers');
const Consumers = require('../Models/consumers.model');

const ConsumerRouter = express.Router();



 

/*************   LOGIN ROUTE    ********** */

ConsumerRouter.get('/consumers', getConsumers);
ConsumerRouter.post('/consumer/new', addConsumer);
ConsumerRouter.patch('/consumer/update', updateConsumer);
ConsumerRouter.delete('/consumer/delete', deleteConsumer);

module.exports = ConsumerRouter;