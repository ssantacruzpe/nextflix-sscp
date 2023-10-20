const mongoose = require("mongoose");

const apiData = new mongoose.Schema({
  links: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ApiData = mongoose.model("ApiData", apiData);

module.exports = ApiData;
