const routes = require("express").Router();

const ConsultationController = require("./controllers/ConsultationController");

routes.get("/consultation", ConsultationController.index);
routes.post("/consultation", ConsultationController.store);

module.exports = routes;
