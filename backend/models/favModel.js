const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
    movieID: { type: Number } /*just for test*/,
    isFav: {
type: Boolean,
default: true,
    },
});

const favModel = mongoose.model("favModel", favSchema);

module.exports = favModel;