const net = require("net");

const hostname = "0.0.0.0";
const port = 4221;

const server = net.createServer((socket) => {
    socket.on("close", () => {
        socket.end();
        server.close();
    });
    socket.on("data", (data) => {
        const request = data.toString();
        const lines = request.split("\r\n");
        const [method, path, version] = lines[0].split(" ")
        if (path === "/") {
            socket.write("HTTP/1.1 200 OK\r\n\r\n");
        } else {
            socket.write("HTTP/1.1 404 Not found\r\n\r\n");
        }
        socket.end();
    });
});

server.listen(port, hostname);

console.log(`Listening for connections on: ${hostname}:${port}`);
