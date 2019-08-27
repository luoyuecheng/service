const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.post('/api/demo/insert', function (req, res) {
  console.log('response', req.body);
  db.insertOne('example', req.body, function (results) {
    console.log(results);
    res.send(results);
  })
})

router.get('/api/example', function (req, res) {
    db.find('example', {}, function (results) {
      console.log('results', results);
      res.send(results);
    });
})

module.exports = router;