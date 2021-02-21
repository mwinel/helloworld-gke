const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello world received a request.");

  const target = process.env.TARGET || "World";
  res.send(`Hello ${target}!`);
});

app.get("/all", (req, res) => {
  console.log("Hello world received another request.");

  res.send({ message: 'This endpoint is meant to get all.'});
});

app.get("/yes", (req, res) => {
  console.log("Hello world received another request.");

  res.send({ message: 'This endpoint is meant to get yes.'});
});

app.get("/no", (req, res) => {
  console.log("Hello world received another request.");

  res.send({ message: 'This endpoint is meant to get no.'});
});

app.get("/haha", (req, res) => {
  console.log("Hello world received another request.");

  res.send({ message: 'This endpoint is meant to get hahahahahah.'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
