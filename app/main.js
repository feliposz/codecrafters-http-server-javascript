const net = require("net");

const hostname = "0.0.0.0";
const port = 4221;

const server = net.createServer((socket) => {
  socket.on("close", () => {
    socket.end();
    server.close();
  });
});

server.listen(port, hostname);

console.log(`Listening for connections on: ${hostname}:${port}`);
