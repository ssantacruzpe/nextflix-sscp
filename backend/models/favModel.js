const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
    imageUrl:{type: String}, /*just for test*/
    isFavorite: {type: Boolean},
});


module.exports = mongoose.model('Image', imageSchema);
