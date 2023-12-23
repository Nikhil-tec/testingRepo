const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

let client = new MongoClient(url);

async function mongoDb(){

    let result = await client.connect();
    console.log(result);
    let db = result.db('testDbs');
    return db.collection('sample_data');
}

module.exports = mongoDb;