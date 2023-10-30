const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

app.get("/", (req, res, next) => {
  res.send("Hello From Server Socket IO App Hành Chính");
});

io.on("connection", (socket) => {
  console.log("User Connected !");

  socket.on("on-send-data", (data) => {
    socket.emit("server-send-data", data);
  });
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
