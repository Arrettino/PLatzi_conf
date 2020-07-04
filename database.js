const { MongoClient } = require("mongodb");

const url = process.env.URL;
const client = new MongoClient(url);
const dbName = "Cluster0";

async function database(crud, data) {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    const col = db.collection("badges");
    const myDoc =await col.find({}).toArray()
    console.log(myDoc)
    return(myDoc)

  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = database;
