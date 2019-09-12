const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://182.61.138.124:27017';
const dbName = 'blog';

function mongoClient(callback) {
  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    callback && callback.call(this, client, db);
  })
}

// create a collection
// createCollection('user');
function createCollection(collectionName) {
  mongoClient(function (client, db) {
    db.createCollection(collectionName, function (err, collection) {
      db.listCollections({}).toArray(function (err, results) {
        console.log(results);
        client.close();
      })
    })
  })
}

// query all collesctions
// listCollections();
function listCollections() {
  mongoClient(function (client, db) {
    db.listCollections({}).toArray(function (err, results) {
      console.log(results);
      client.close();
    })
  })
}

// fetch all collections for the db
// collection is db.collection(collectionName);
// @results {array} [collection1, collection2]
// collections();
function collections() {
  mongoClient(function (client, db) {
    db.collections(function (err, results) {
      console.log(results);
      client.close();
    })
  })
}

// drop a collection with collection name
// dropCollection('user');
function dropCollection(collectionName) {
  mongoClient(function (client, db) {
    db.dropCollection(collectionName, function (err, results) {
      console.log(results);
      client.close();
    })
  })
}