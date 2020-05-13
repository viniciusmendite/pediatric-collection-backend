const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ConsultationSchema = new mongoose.Schema({
  patient: {
    type: String,
  },
  responsible: {
    type: String,
  },
  pulse: {
    type: String,
  },
  saturation: {
    type: String,
  },
  respiration: {
    type: String,
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
  },
  date: {
    type: String,
  },
  hour: {
    type: String,
  },
});

ConsultationSchema.plugin(mongoosePaginate);

mongoose.model("Consultation", ConsultationSchema);
