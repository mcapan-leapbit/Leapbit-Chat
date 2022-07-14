const express = require("express");
const app = express();
const router = require("./routes/router");
const dotenv = require("dotenv");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origins: "/",
    credentials: false,
  },
});

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", function (socket) {
  console.log("user connected");
  socket.on("messageSent", function (message) {
    console.log(message);
  });
});

app.use("/", router);

server.listen(3000, () => {
  console.log("server running on 3000");
});
