const express = require("express");
const router = express.Router();
const {markFav, getAllFav, removeFav} = require("../controllers/favControllers")


router.post("/favorites/create", markFav)
router.get("/favorites", getAllFav)
router.delete("/favorites/delete/:id", removeFav)


module.exports = router;