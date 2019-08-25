// const uri = "mongodb+srv://luoyuecheng:a@cluster1-ggiu6.mongodb.net/test?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://182.61.138.124:27017';
const dbName = 'meetion';

const mongoClient = new MongoClient(url);

mongoClient.connect(function (err, client) {
  assert.equal(null, err);
  assert.ok(client != null);

  const db = client.db(dbName);
  const collection = db.collection('example');
  
  console.log('db: ', collection.insertMany)
  const docs = [
    {
      item: 'notebook',
      qty: 2,
      status: 'B',
      size: { h: 168, w: 11, uom: 'out' },
      tags: ['blue', 'black']
    }
  ]
  collection.insertMany(docs, function (err, result) {
    assert.equal(null, err);
    console.log('result', result);
  })
  client.close();
})
