const route = require("express").Router();
const { signUp, login, verify } = require("../controllers/userController");

route.post("/signup", signUp);
route.post("/login", login );
route.post("/verify", verify );


module.exports = route