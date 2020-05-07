require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");

const app = express();

app.use(express.json());
app.use(cors());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// chamando o model
require("./models/Consultation");

// chamando as rotas
const routes = require("./routes");

app.use(routes);
app.use(errors());

app.listen(process.env.PORT || 3001);
