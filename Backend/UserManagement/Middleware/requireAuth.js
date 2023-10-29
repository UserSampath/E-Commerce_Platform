const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id role");
    if (!req.user) {
      return res.redirect("/login"); // redirect to login page if user not found
    }
    req._id = req.user._id;
    req.role = req.user.role;
    next();
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.redirect("/login");
    }
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;

