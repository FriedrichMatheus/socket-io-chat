const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("/chat-msg", (msg) => {
    io.emit("/chat-msg", msg);
  });
});

http.listen(port, () => {
  console.log(`Socket on na porta: ${port}`);
});
