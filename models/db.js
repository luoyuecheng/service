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

/**
 * query documents
 * @param {string} collectionName collection name
 * @param {object} param query conditions
 * @param {function} callback
 */
module.exports.find = function (collectionName, param, callback) {
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
    collection.find(param).toArray().then(function (items) {
      callback && callback.call(this, items);
      client.close();
    })
  })
}

/**
 * insert many data
 */
module.exports.insertOne = function (collectionName, param, callback) {
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
    collection.insertOne(param).then(function (results) {
      assert.equal(1, results.insertedCount);
      callback && callback.call(this, results);
      db.close();
    })
  })
}