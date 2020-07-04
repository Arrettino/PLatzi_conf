const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const proxy = require("./proxy");
//dev
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
proxy(app);



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT;

app.listen(port, console.log(`Server is starting at ${port}`));
