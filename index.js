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

const hostname = "192.168.0.131";
const port = process.env.PORT || 3000;

app.use(requestTime);

app.post("/add/", (req, res) => {
  const { firstOperand, secondOperand } = req.body;
  const result = parseInt(firstOperand) + parseInt(secondOperand);

  return res.send({ result });
});
app.post("/multiply/", (req, res) => {
  const { firstOperand, secondOperand } = req.body;
  const result = parseInt(firstOperand) * parseInt(secondOperand);

  return res.send({ result });
});
app.post("/subtract/", (req, res) => {
  const { firstOperand, secondOperand } = req.body;
  const result = parseInt(firstOperand) - parseInt(secondOperand);

  return res.send({ result });
});

app.listen(port, () => {
  console.log(`server running on http://${hostname}:${port}`);
});
