const Image = require("../Models/favModels.js")

// Mark an image as favorite

const markFav = async (req, res) => {
    const { id } = req.params;
        try {
            const image = await Image.findById(id);
            if (!image) {
                return res.status(404).json({ error: "Movie not found" });
            }
            const newFavorite = new Image({
                imageUrl: image.imageUrl,
                isFavorite: true,
            });

            const savedFavorite = await newFavorite.save();
            res.json(savedFavorite);
                } catch (error) {
                    res.status(500).send({ msg: "Internal error, failed to mark as favorite" });
                }
            };


// Get all favorite images

const getAllFav = async (req, res) => {
        try {
            const favoriteImages = await Image.find({ isFavorite: true });
            res.json(favoriteImages);
                } catch (error) {
                    res.status(500).send({msg:"Internal error, failed to get all the favorites"})
                        }
            };

//Remove favorite

const removeFav = async (req, res) =>{
    const { id } = req.params;
        try {
            const updatedImage = await Image.findByIdAndUpdate(id, { isFavorite: false }, { new: true });
                if (!updatedImage) {
                return res.status(404).json({ error: "Movie not found" });
                 }
                    res.json(updatedImage);
                    } catch (error) {
                        res.status(500).send({msg:"Internal error, failed to remove favorite"})
                            }
                };
    
    
module.exports = {markFav, getAllFav, removeFav}