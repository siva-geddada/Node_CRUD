const mongoose = require("mongoose");
const moment = require("moment-timezone");
const UserProfile = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please enter your First Name"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please enter your Last Name"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please enter your email address"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please enter your password"],
    },
    phone: {
      type: Number,
      trim: true,
      required: [true, "Please enter your phone number"],
    },
    dob: {
      type: Date,
      format: "YYYY-MM-DD",
    },
    role: {
      enum: ["user", "admin", "super_admin"],
      type: String,
      trim: true,
      default: "user",
    },
    // lastLogin: {
    //   type: Date,
    //   format: moment
    //     .unix(1502212611)
    //     .tz("Asia/Kolkata")
    //     .format("YYYY-MM-DD HH:mm:ss"),
    //   default: Date.now(moment.unix(1502212611).tz("Asia/Kolkata")),
    // },
    createdAt: {
      type: Date,
      default: moment().tz("Asia/Kolkata"),
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProfile", UserProfile);
