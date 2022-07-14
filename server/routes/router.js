const express = require("express");
const router = express.Router();
const { connectToDB } = require("../utils/mongo-logic");

let connection;

(async () => {
  connection = await connectToDB();
})();

router.get("*", async (req, res) => {
  const users = await connection.db("leapbitChat").collection("messages");
  res.send(await users.find({}).toArray());
});

router.post("/add-user", async (req, res) => {
  const users = await connection.db("leapbitChat").collection("messages");
  await users.insertOne({
    text: req.body.text,
  });
  res.status(201).send();
});

module.exports = router;
