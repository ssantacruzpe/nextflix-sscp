const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
imageUrl: String,
isFavorite: Boolean
});


module.exports = mongoose.model('Image', imageSchema);
