const socketIo = require("socket.io");

const { options } = require("./config/cors");
const { httpServer } = require("./server");

const io = new socketIo.Server(httpServer, options);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    const yourMessage = `You: ${msg}`;

    console.log(yourMessage);

    io.emit("chat message", yourMessage);
  });
});
