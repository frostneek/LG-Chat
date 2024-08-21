const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

module.exports = (req, res) => {
    if (!res.socket.server.io) {
        console.log("Socket is initializing");
        io.attach(res.socket.server);
        res.socket.server.io = io;
    }
    res.end();
};
