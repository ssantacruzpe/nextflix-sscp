require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ msg: "Unauthorized access" });
    }

    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "Invalid token" });
    }

    const verifiedToken = jwt.verify(token, "privateKey");

    if (!verifiedToken) {
      return res.status(401).json({ msg: "Invalid Token" });
    }

    req.userId = verifiedToken.userId;

    next();

  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send(error);
  }
}

module.exports = verify;