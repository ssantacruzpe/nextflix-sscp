const Image = require("../models/favModel.js");
const favModel = require("../models/favModel.js");


// Mark an image as favorite

const markFav = async (req, res) => {
    try {
    const newFav = req.body;
    const savedFavorite = await favModel.create(newFav);
    res.json(savedFavorite);
        } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal error, failed to mark as favorite" });
        }
};


// Get all favorite images

const getAllFav = async (req, res) => {
    try {
        const favoriteImages = await Image.find({ isFavorite: true });
        res.json(favoriteImages);
        } catch (error) {
        res
        .status(500)
        .send({ msg: "Internal error, failed to get all the favorites" });
        }
};


//Remove favorite

const removeFav = async (req, res) => {
    const { id } = req.params;
        try {
        const updatedImage = await Image.findByIdAndUpdate(
        id,
        { isFavorite: false },
        { new: true },
        );
            if (!updatedImage) {
            return res.status(404).json({ error: "Movie not found" });
            }
                res.json(updatedImage);
                } catch (error) {
                res.status(500).send({ msg: "Internal error, failed to remove favorite" });
                }
};


module.exports = { markFav, getAllFav, removeFav };