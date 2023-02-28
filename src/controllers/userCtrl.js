const Users = require("../models/userModel");
const validate = require("../middleware/validators");
const bcrypt = require("bcryptjs");
const sendMail = require("./sendMail");
const jwt = require("jsonwebtoken");

const { CLIENT_URL } = process.env;
const userCtrl = {
  signUp: async (req, res) => {
    try {
      const { firstName, lastName, email, password, phone } = req.body;
      if (!firstName || !lastName || !email || !password || !phone) {
        return res
          .status(400)
          .json({ message: "Please fill all the required fields" });
      }
      if (!validate.validateEmail(email)) {
        return res.status(400).json({ message: "Email is not valid" });
      }
      const user = await Users.findOne({ email });
      if (user) {
        return res.status(403).json({ message: "This email already exists." });
      }
      if (password.length < 6)
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters." });
      const passwordHash = await bcrypt.hash(password, 12);
      if (firstName && lastName && email && password && phone) {
        const newUser = new Users({
          firstName,
          lastName,
          email,
          password: passwordHash,
          phone,
        });
        const user = await newUser.save();
        const userId = user ? user._id.toString() : null;
        const token = await validate.createActivationToken(userId);
        const url = `${CLIENT_URL}/auth/activate/${token}`;
        sendMail(email, url, "Verify Your Email", "Verify Your Email Address");
        res.status(200).json({
          message:
            "User Created successfully and Verification Link sent it to your registered mailId",
        });
      }
    } catch (error) {
      return console.log(error);
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const { token } = req.body;
      const { user } = jwt.verify(token, process.env.ACTIVATION_TOKEN_SECRET);
      const isUser = await Users.findOne(user);
      if (isUser) {
        await User.findOneAndUpdate({ user }, { emailVerified: true });
      }
      res.json({
        message: "Account has been activated! Please login to Your account",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find().select();
      res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  },
  getUser: async (req, res) => {
    const user = await Users.findById(req.params.id).select();
    if (!user) {
      res.status(400).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  },
  deleteUser: async (req, res) => {
    let user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(400).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User deleted successfully" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { firstName, lastName, email, phone } = req.body;
      if (!firstName || !lastName || !email || !phone) {
        return res
          .status(400)
          .json({ message: "Please fill all the required fields" });
      }
      if (!req.params.id) {
        return res.status(400).json({ message: "User is not exits" });
      }
      let id = req.params.id;
      let requestObj = { firstName, lastName, email, phone };
      await Users.findOneAndUpdate(id, requestObj);
      res.status(200).json({ message: "User Updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userCtrl;
