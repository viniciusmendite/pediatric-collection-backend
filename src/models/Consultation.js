const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

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

ConsultationSchema.plugin(mongoosePaginate);

mongoose.model("Consultation", ConsultationSchema);
