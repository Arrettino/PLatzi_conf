const { MongoClient } = require("mongodb");
const url = process.env.URL;
const client = new MongoClient(url);
const dbName = "Cluster0";

async function setup_database(crud, data) {
  try{
    await client.connect()
    console.log("Connected correctly to server");
    const db = await client.db(dbName);
    const col = await db.collection("badges");    
    return col
  }catch(e){
    console.log(e)
  }
}


module.exports = setup_database;
