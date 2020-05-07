const routes = require("express").Router();
const { celebrate, Segments, Joi } = require("celebrate");

const ConsultationController = require("./controllers/ConsultationController");

routes.get(
  "/consultation",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  ConsultationController.index
);

routes.get("/consultation/:id", ConsultationController.show);

routes.post(
  "/consultation",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      doctor: Joi.string().required(),
      patient: Joi.string().required(),
      responsible: Joi.string().required(),
      pulse: Joi.number().required(),
      saturation: Joi.number().required(),
      respiration: Joi.number().required(),
      date: Joi.string().required(),
      hour: Joi.string().required(),
    }),
  }),
  ConsultationController.store
);

routes.put("/consultation/:id", ConsultationController.update);

routes.delete("/consultation/:id", ConsultationController.delete);

module.exports = routes;
