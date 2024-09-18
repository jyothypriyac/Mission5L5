require("dotenv").config();
const express = require("express");

const app = express();

app.listen(process.env.API_PORT, () => {
  console.log("Server Started");
});

app.use(express.json());
const trademeRouter = require("./Routes/trademeRouter");
app.use(trademeRouter);
