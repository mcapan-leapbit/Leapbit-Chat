const express = require("express");
const app = express();
const router = require("./routes/router");
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path:'../.env'});

const io = require("socket.io")(server, {
  cors: {
    origins: "/",
    credentials: false,
  },
});

app.use(
  cors({
    origin: process.env.ORIGIN_LINK,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", function (socket) {
  console.log("User connected");
  socket.on("messageSent", function (message) {
    console.log(message);
  });
});

app.use("/", router);

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});
