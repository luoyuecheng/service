const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.get('/api', function (req, res) {
})

router.get('/api/example', function (req, res) {
    db(req, res);
})

module.exports = router;