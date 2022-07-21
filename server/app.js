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
    io.to(process.env.VUE_APP_ADMIN_ID)
      .to(packetFromClient.conversation_id)
      .emit("confirmToClient", packetFromClient);

    console.log(
      "message sent to rooms " +
        process.env.VUE_APP_ADMIN_ID +
        " " +
        packetFromClient.conversation_id
    );
  });

  socket.on("login", async function (id) {
    socket.join(id);
    console.log("logged in rooom " + id);
  });

  socket.on("ChatOpened", async function (conv_id, msg_length) {
    await messages.updateOne(
      {
        conversation_id: conv_id,
      },
      {
        "$set": {"last_index": msg_length}
      }
    );
    io.to(process.env.VUE_APP_ADMIN_ID)
      .emit("ChangedNotifNumber");
  });
});

app.use("/", router);

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});
