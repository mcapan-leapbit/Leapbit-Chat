const express = require("express");
const app = express();
const router = require("./routes/router");
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToDB } = require("./utils/mongo-logic");

dotenv.config({ path: "../.env" });

const io = require("socket.io")(server, {
  cors: {
    origins: "/",
    credentials: false,
  },
});

let connection;
let messages;

(async () => {
  connection = await connectToDB();
  messages = await connection.db("leapbitChat").collection("messages");
})();

app.use(
  cors({
    origin: process.env.ORIGIN_LINK,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", function (socket) {
  socket.on("messageSent", async function (packetFromClient) {
    await messages.updateOne(
      {
        conversation_id: packetFromClient.conversation_id,
      },
      packetFromClient.values,
      { upsert: true }
    );
  });
});

app.use("/", router);

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});
