const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ConsultationSchema = new mongoose.Schema({
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
  },
  saturation: {
    type: Number,
  },
  respiration: {
    type: Number,
  },
  pressure: {
    type: String,
  },
  address: {
    type: String,
  },
  neighborhood: {
    type: String,
  },
  city: {
    type: String,
  },
  telephone: {
    type: String,
  },
  medic: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
  },
});

ConsultationSchema.plugin(mongoosePaginate);

mongoose.model("Consultation", ConsultationSchema);
