require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
require("./models/Consultation");

const routes = require("./routes");

app.use(routes);

app.listen(process.env.PORT || 3001);
