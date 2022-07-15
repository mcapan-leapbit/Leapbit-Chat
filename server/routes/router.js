const express = require("express");
const router = express.Router();
const { connectToDB } = require("../utils/mongo-logic");

let connection;

(async () => {
  connection = await connectToDB();
})();

router.get("/conversation/:id", async (req, res) => {
  let id = req.params.id;
  const users = await connection.db("leapbitChat").collection("messages");
  res.send(await users.find({ conversation_id: id }).toArray());
});

router.get("/conversations", async (req, res) => {
  const users = await connection.db("leapbitChat").collection("messages");
  res.send(await users.find({}).toArray());
});

router.post("/message", async (req, res) => {
  const users = await connection.db("leapbitChat").collection("messages");
  await users.updateOne({ text: req.body.text }, { upsert: true });
  res.status(201).send();
});

module.exports = router;
