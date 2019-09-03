const express = require('express');
const db = require('../models/db');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();

router.post('/api/demo/insert', function (req, res) {
  console.log('response', req.body);
  const doc = {};
  doc.title = req.body.title;
  doc.desc = req.body.desc;
  doc.contentType = req.body.contentType;
  doc.content = req.body.content;
  doc.createTime = new Date().getTime();
  doc.updateTime = null;
  doc.category = req.body.category;
  doc.label = req.body.label;

  db.insertOne('example', doc, function (results) {
    console.log(results);
    const retValue = {
      success: false,
      successCode: 0,
      message: ''
    };

    if (results.insertedCount === 1) {
      retValue.success = true;
      retValue.successCode = 1;
      retValue.message = 'Article added successfully';
    }
    res.send(retValue);
  })
})

router.delete('/api/demo/delete/:_id', function (req, res) {
  const _id = req.params._id;
  console.log('delete', _id);
  db.deleteOne('example', { _id: ObjectId(_id) }, function (results) {
    console.log('delete results', results);
    res.send({ success: true, successCode: 1 });
  })
})

router.get('/api/example', function (req, res) {
    db.find('example', {}, function (results) {
      console.log('results', results);
      res.send(results);
    });
})

router.get('/api/articleLists', function (req, res) {
  db.find('example', {}, function (results) {
    res.send({ success: true, successCode: 1, data: results });
  })
})

router.get('/api/articleLists/:id', function (req, res) {
  const filter = { _id: ObjectId(req.params.id) };
  db.findOne('example', filter, function (results) {
    res.send({ success: true, successCode: 1, data: results });
  })
})

module.exports = router;