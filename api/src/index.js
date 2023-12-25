const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("Helloww11ww");
});

app.get("/test", (req, res) => {
  res.send("testZp");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "zoloo" && password === "a") {
    const token = jwt.sign({ name: email }, "test");
    return res.json({
      token: token,
    });
  }

  res.status(401).send({
    message: "Invalid credentials",
  });
});

const port = 3002;

app.listen(port, () => {
  console.log(`aaawaa${port}`);
});
