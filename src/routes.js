const routes = require("express").Router();

const ConsultationController = require("./controllers/ConsultationController");

routes.get("/consultation", ConsultationController.index);
routes.get("/consultation/:id", ConsultationController.show);
routes.post("/consultation", ConsultationController.store);
routes.put("/consultation/:id", ConsultationController.update);
routes.delete("/consultation/:id", ConsultationController.delete);

module.exports = routes;
