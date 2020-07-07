const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const url = process.env.URL;
const client = new MongoClient(url);
const dbName = "Cluster0";

async function proxy(app) {
  const router = express.Router();
  app.use("/proxy", router);
  await client.connect();
  console.log("Connected correctly to server");
  const db = client.db(dbName);
  const col = db.collection("badges");

  router.get("/badges", async (req, res, next) => {
    try {
      let data = await col.find({}).toArray();
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });
  router.post("/badge", async (req, res, next) => {
    const data = req.body;
    let p = await col.insertOne(data);
    res.send(p);
  });

  router.get("/badges/:badgeId", async (req, res, next) => {
    const { badgeId } = req.params;
    console.log(badgeId);
    let badge = await col.findOne({ _id: ObjectID(badgeId) });
    res.send(badge);
  });
  router.put("/badges/:badgeId", async (req, res, next) => {
    const badge = req.body;
    let b = await col.updateOne(
      { _id: ObjectID(badge._id) },
      {
        $set: {
          firstName: `${badge.firstName}`,
          lastName: `${badge.lastName}`,
          email: `${badge.email}`,
          jobTitle: `${badge.jobTitle}`,
          instagram: `${badge.instagram}`,
          avatarUrl: `${badge.avatarUrl}`,
        },
      }
    );
    res.send(b);
  });
  router.delete("/badges/:badgeId", async (req, res, next) => {
    const { badgeId } = req.params;
    try {
      let badge = await col.deleteOne({ _id: ObjectID(badgeId) });
      res.send(badge);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = proxy;
