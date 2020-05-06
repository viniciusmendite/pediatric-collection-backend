const mongoose = require("mongoose");

const Consultation = mongoose.model("Consultation");

module.exports = {
  async index(req, res) {
    const consultation = await Consultation.find();

    return res.json(consultation);
  },

  async store(req, res) {
    const consultation = await Consultation.create(req.body);

    return res.json(consultation);
  },
};
