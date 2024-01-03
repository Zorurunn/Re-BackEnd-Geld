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

// SIGN IN
app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });

  res.json({
    token,
  });
});

// SIGN UP
app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (user) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const id = uuidv4();

  users.push({
    email,
    password,
    id,
  });

  await fs.writeFile(filePath, JSON.stringify(users));

  res.json({
    message: "User created",
  });
});

// GET Records
app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const allrecords = JSON.parse(recordsRaw);

    const userRecords = allrecords.filter(
      (record) => record.userEmail === email
    );

    res.json({
      records: userRecords,
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// GET Categories
app.get("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/categories.json";

    const categoriesRaw = await fs.readFile(filePath, "utf8");

    const allCategories = JSON.parse(categoriesRaw);

    const userCategories = allCategories.filter(
      (category) => category.userEmail === email
    );

    res.json({
      categories: userCategories,
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// POST Records
app.post("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const { type, icon, category, date, amount, currency } = req.body;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    records.push({
      type,
      icon,
      category,
      date,
      amount,
      currency,
      id: uuidv4(),
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Record created",
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// POST Category
app.post("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const { icon, category } = req.body;

    const filePath = "src/data/categories.json";

    const categoriesRaw = await fs.readFile(filePath, "utf8");

    const categories = JSON.parse(categoriesRaw);

    categories.push({
      icon,
      category,
      id: uuidv4(),
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(categories));

    res.json({
      message: "Category created",
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// app.post("/categories", (req, res) => {
//   const { icon, name } = req.body;

//   categories.push({ icon, name, id: uuidv4() });

//   return res.json(categories);
// });

const port = 3002;

app.listen(port, () => {
  console.log(`aaawaa${port}`);
});
