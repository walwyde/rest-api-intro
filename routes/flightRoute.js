const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

//get all flights
router.get('/:destination', controller.getFlight)

//add flight
router.post('/', controller.postexample)

//get single flight
router.get('/', controller.example)

//delete flight
router.delete('/:destination', controller.delete)

module.exports = router;

