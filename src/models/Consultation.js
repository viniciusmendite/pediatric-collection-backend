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
  createdAt: {
    type: Date,
    default: Date.now(),
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
});

mongoose.model("Consultation", ConsultationSchema);
