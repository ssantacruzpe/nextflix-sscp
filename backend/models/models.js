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

/*Favorites Schema 
const imageSchema = new mongoose.Schema({
  imageUrl: String,
  isFavorite: Boolean
});

module.exports = mongoose.model('Image', imageSchema);

*/