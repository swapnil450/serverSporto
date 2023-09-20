const mongoose = require("mongoose");

const tourProgramSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  lastDate: {
    type: Date,
    required: true,
  },
  post: {
    type: String,
  },
  area: [String],
  month: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdByName: {
    type: String,
  },

  createdAt: {
    type: Date,
  },
  DcrId: {
    type: String,
  },
  Useable: {
    type: Boolean,
  },
  SentToApv: {
    type: Boolean,
  },
  Act: {
    type: Boolean,
  },
  Apv: {
    type: Boolean,
  },
});

const TourProgram = mongoose.model("TourProgram", tourProgramSchema);

module.exports = TourProgram;
