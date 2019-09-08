const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://182.61.138.124:27017';
const dbName = 'blog';

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

module.exports.findOne = function (collectionName, filter, options, callback) {
  if (arguments.length === 3) {
    callback = options;
  }
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
    collection.findOne(filter, function (err, results) {
      console.log('filter one', filter, results);
      callback && callback.call(this, results);
      client.close();
    })
  })
}

/**
 * insert one data
 */
module.exports.insertOne = function (collectionName, param, callback) {
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
    collection.insertOne(param).then(function (results) {
      // assert.equal(1, results.insertedCount);
      callback && callback.call(this, results);
      client.close();
    })
  })
}

/**
 * insert many data
 */
module.exports.insertMany = function (collectionName, param, callback) {
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);
    collection.insertMany(param).then(function (results) {
      // assert.equal(1, results.insertedCount);

      callback && callback.call(this, results);
      client.close();
    })
  })
}

/**
 * delete one document
 */
module.exports.deleteOne = function (collectionName, filter, options, callback) {
  if (arguments.length === 3) {
    callback = options;
  }
  mongoClient(function (client, db) {
    const collection = db.collection(collectionName);

    collection.deleteOne(filter).then(function (results) {
      console.log('deleteOne results', results);
      // assert.equal(1, results.deleteCount);

      callback && callback.call(this, results);
      client.close();
    })
  })
}