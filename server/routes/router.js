const express = require("express");
const router = express.Router();
const { connectToDB } = require("../utils/mongo-logic");
const { Kafka } = require("kafkajs");
const brokers = ["localhost:9092"];
const topic = "chat-messages";
const kafka = new Kafka({ brokers });
const producer = kafka.producer();


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
  res.send(await messages.find().sort({ last_updated: -1 }).toArray());
});

router.post("/conversation", async (req, res) => {
  await messages.insertOne(req.body);

  await producer.connect();
  await producer.send({
    topic: topic,
    messages: [
      {
        key: "user",
        value: JSON.stringify(req.body),
      },
    ],
  });

  res.status(201).send();
});

module.exports = router;
