require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const requestTime = (req, res, next) => {
  let start = new Date().getTime();
  next();
  let end = new Date().getTime();
  console.log(`${req.method} ${req.path} ${end - start} ms.`);
};

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hostname = "127.0.0.1";
const port = 3000;

app.use(requestTime);

app.post("/add", (req, res) => res.send("from add"));
app.post("/multiply", (req, res) => res.send("from multiply"));
app.post("/subtract", (req, res) => res.send("from subtract"));

app.listen(port, () => {
  console.log(`server running on http://${hostname}:${port}`);
});
