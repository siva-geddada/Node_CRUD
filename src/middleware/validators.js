const jwt = require("jsonwebtoken");

const validators = {
  validateEmail: (email) => {
    const mailRegExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegExp.test(email);
  },
  createActivationToken: (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET);
  },
  createAccessToken: (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  },

  createRefreshToken: (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  },
};

module.exports = validators;
