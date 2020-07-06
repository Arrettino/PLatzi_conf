const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const proxy = require("./proxy");
const port = process.env.PORT;

proxy(app);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});


app.listen(port, console.log(`Server is starting at ${port}`));
