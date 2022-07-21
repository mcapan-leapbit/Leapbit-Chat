const express = require("express");
const router = express.Router();
const { connectToDB } = require("../utils/mongo-logic");

let connection;
let messages;

(async () => {
  connection = await connectToDB();
  messages = await connection.db("leapbitChat").collection("messages");
})();

router.get("/conversation/:id", async (req, res) => {
  const conversation_id = req.params.id;
  res.send(await messages.findOne({ conversation_id: conversation_id }));
});

router.get("/conversations", async (req, res) => {
  res.send(await messages.find({}).toArray());
});

router.post("/conversation", async (req, res) => {
  await messages.insertOne(req.body);
  res.status(201).send();
});

module.exports = router;
