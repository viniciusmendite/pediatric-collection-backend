const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  doctor: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  responsible: {
    type: String,
    required: true,
  },
  pulse: {
    type: Number,
    required: true,
  },
  saturation: {
    type: Number,
    required: true,
  },
  respiration: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
});

mongoose.model("Consultation", ConsultationSchema);
