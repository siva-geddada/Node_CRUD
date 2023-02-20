const Users = require("../models/userModel");

const userCtrl = {
  signUp: async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res
          .status(400)
          .json({ message: "Please fill all the required fields" });
      }
      const user = await Users.findOne({ email });
      if (user) {
        return res.status(403).json({ message: "This email already exists." });
      }
      if (name && email && phone) {
        const newUser = new Users({
          name,
          email,
          phone,
        });
        await newUser.save();
        res.status(200).json({ message: "User Created successfully" });
      }
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
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res
          .status(400)
          .json({ message: "Please fill all the required fields" });
      }
      if (!req.params.id) {
        return res.status(400).json({ message: "User is not exits" });
      }
      let id = req.params.id;
      let requestObj = { name, email, phone };
      await Users.findOneAndUpdate(id, requestObj);
      res.status(200).json({ message: "User Updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userCtrl;
