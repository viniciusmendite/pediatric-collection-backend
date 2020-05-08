const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const ConsultationController = require('./controllers/ConsultationController');

routes.get(
  '/consultation',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  ConsultationController.index
);

routes.get('/consultation/:id', ConsultationController.show);

routes.post(
  '/consultation',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      patient: Joi.string().required(),
      responsible: Joi.string().required(),
      pulse: Joi.number(),
      saturation: Joi.number(),
      respiration: Joi.number(),
      pressure: Joi.string(),
      address: Joi.string(),
      neighborhood: Joi.string(),
      city: Joi.string(),
      telephone: Joi.string(),
      medic: Joi.string().required(),
      date: Joi.string().required(),
      hour: Joi.string(),
    }),
  }),
  ConsultationController.store
);

routes.put('/consultation/:id', ConsultationController.update);

routes.delete('/consultation/:id', ConsultationController.delete);

module.exports = routes;
