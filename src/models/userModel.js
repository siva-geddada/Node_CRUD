const mongoose = require("mongoose");

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
    phone: {
      type: Number,
      trim: true,
      required: [true, "Please enter your phone number"],
    },
    dob: {
      type: Date,
      format: "yyyy-MM-dd",
    },
    role: {
      enum: ["user", "admin", "super_admin"],
      type: String,
      trim: true,
      default: "user",
    },
    lastLogin: {
      type: Date,
      format: "yyyy-MM-ddTHH:mm:ss.SSSZ",
      default: Date.now,
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
