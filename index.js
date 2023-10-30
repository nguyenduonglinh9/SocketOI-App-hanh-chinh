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

  socket.on("createTicket", (data) => {
    socket.broadcast.emit("server-send-createTicket", data);
  });
  socket.on("updateTicket", (data) => {
    socket.broadcast.emit("server-send-updateTicket", data);
  });
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
