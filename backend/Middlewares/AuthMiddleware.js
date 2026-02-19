const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.status(401).json({ status: false });
      }

      const user = await User.findById(data.id);
      if (!user) {
        return res.status(401).json({ status: false });
      }

      // ✅ attach user info, DO NOT send response
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ status: false });
  }
};
