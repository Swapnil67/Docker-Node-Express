const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

exports.signup = async (req, res) =>  {
  try {
    const { username, password } = req.body;
    const encPassword = await bcrypt.hash(password, 12);
    const userPayload = { username,  password: encPassword };
    const newUser = await User.create(userPayload);
    req.session.user = newUser;
    return res.status(201).json({
      status: true,
      data: newUser
    });
  } catch (err) {
    console.log("signup Error : ", err);
    return res.status(500).json({
      status: false,
      data: []
    })
  }
}

exports.login = async (req, res) =>  {
  try {
    const { username, password } = req.body;
    const user =  await User.findOne({ username });
    if(!user) {
      return res.status(404).json({
        status: false,
        data: []
      });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if(isCorrect) {
      req.session.user = user;
      return res.status(200).json({
        status: true,
        message: "User logged in succuessfully"
      });
    } else {
      return res.status(400).json({
        data: [],
        status: false,
        message: "Incorrect username or password"
      });
    }
  } catch (err) {
    console.log("login Error : ", err);
    return res.status(500).json({
      status: false,
      data: []
    })
  }
}