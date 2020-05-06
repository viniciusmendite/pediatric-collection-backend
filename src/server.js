require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require("./routes");
const app = express();

app.use(routes);

app.listen(3001);
