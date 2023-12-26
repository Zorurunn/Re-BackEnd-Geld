const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const categories = [
  {
    icon: "❤︎",
    name: "Food & Drink",
    id: uuidv4(),
  },
  {
    icon: "👶",
    name: "Baby",
    id: uuidv4(),
  },
];
app.get("/", (req, res) => {
  console.log(req);
  res.send("Helloww11ww");
});

app.get("/test", (req, res) => {
  res.send("testZp");
});

app.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  if (email === "a" && password === "a") {
    const token = jwt.sign({ name: email }, "test");
    return res.json({
      token: token,
    });
  }

  res.status(401).send({
    message: "Invalid credentials",
  });
});

app.post("/sign-up", (req, res) => {
  const { email, password } = req.body;
  if (email === "a" && password === "a") {
    const token = jwt.sign({ name: email }, "test");
    return res.json({
      token: token,
    });
  }

  res.status(401).send({
    message: "Invalid credentials",
  });
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.post("/categories", (req, res) => {
  const { icon, name } = req.body;

  categories.push({ icon, name, id: uuidv4() });

  return res.json(categories);
});

const port = 3002;

app.listen(port, () => {
  console.log(`aaawaa${port}`);
});
