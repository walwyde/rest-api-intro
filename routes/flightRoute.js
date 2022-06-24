const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/:destination', controller.getFlight)
router.post('/', controller.postexample)
router.get('/', controller.example)

module.exports = router;

