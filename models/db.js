const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://182.61.138.124:27017';
const dbName = 'meetion';

function mongoClient(callback) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    assert.ok(client != null);

    const db = client.db(dbName);
    // connect a connection pool
    // const collection = db.collection('example');
    callback && callback.call(this, client, db);
  })
}

module.exports.find = function (collectionName, whereStr, paramJson, callback) {
  if (arguments.length === 3) {
    callback = paramJson;
    paramJson = null;
  }

  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
  })
}

module.exports = function (req, res) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    assert.ok(client != null);
  
    const db = client.db(dbName);
    const collection = db.collection('example');
  
    collection.find({}).toArray().then(function (items) {
      console.log('items', items);
      res.send(JSON.stringify(items));
    })
  })
}