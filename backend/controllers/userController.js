require('dotenv').config();
const mongoose = require('mongoose');
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = Number(process.env.SALT_ROUNDS);

const signUp = async(req, res) =>{
  try {
    let {username, password} = req.body;
    if(!username || !password) {
      return res.send({msg: "Username and password required"});
    }
    let userFound = await User.findOne({username});
    if(userFound) {
      return res.send({msg: `User with username ${username
        } already exists`});
    } else {
      let hashPassword = await bcrypt.hash(password, saltRounds);
      let newUser = await User.create({username, password: hashPassword})
      return res.send({msg: "Registered successfully", newUser})
    }
  } catch (error) {
    res.status(500).json({msg:"Error in registration:", error});
  }
}

const login = async(req, res) =>{
  try {
    let {username, password} = req.body;
    if(!username || !password) {
      return res.send({msg: "Username and password required"});
    }
    let userFound = await User.findOne({username});
      if(!userFound) {
        return res.send({msg:"No such user found." });
      } else {
        let validatePassword = await bcrypt.compare(password, userFound.password)
        if (!validatePassword) {
          return res.send({ msg : "Invalid Password"})
        }
        // res.send({msg: "Login successful"})
        let token = jwt.sign({userId: userFound._id}, "privateKey")
        res.send(token)
      }
  } catch (error) {
    res.status(500).send(error)
  }
}

const verify = async (req, res) => {
  if (!req.body.token) {
    return res.status(400).json({ msg: "Token is required" });
  }

  try {
    const payload = jwt.verify(req.body.token, "privateKey"); // Hardcoded secret key

    if (payload) {
      const user = await User.findOne({ _id: payload.userId });
      if (user) {
        // Generate a new token with user information if needed
        const newToken = jwt.sign(
          { userId: user._id, username: user.username },
          "privateKey"
        ); // Hardcoded secret key
        return res.status(200).json({ user, token: newToken });
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    } else {
      return res.status(401).json({ msg: "Token is Invalid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Invalid Token", error: error.message });
  }
}

module.exports = {
  signUp,
  login,
  verify
}