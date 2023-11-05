import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: 259200 });
};

const register = async (req, res, next) => {
  const { password, email } = req.body;

  let user;
  try {
    user = await User.findOne({ email: email });

    if (user) return res.status(409).json({ error: "User already exists" });

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({
      ...req.body, // in the body passs the user roll
      password: hashedPassword,
    });

    await newUser.save();
    const token = createToken(newUser._id);
    res.status(200).json({ email, token, role: newUser.role });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email } = req.body;

  try {
    // try to find the user in the clients collection
    let user = await User.findOne({ email: email });

    if (!user) return res.status(404).json({ error: "User Not Found" });

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid)
      return res
        .status(400)
        .json({ error: "Wrong password or username.Please try again!" });

    // to prevent send password to the user.send details without password
    const token = createToken(user._id);
    res.status(200).json({ email: user.email, token, role: user.role });
  } catch (err) {
    next(err);
  }
};

const authUser = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const userID = await User.findOne({ _id }).select("_id role ");
    return res.json(userID);
  } catch (error) {
    // console.log(error);
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "user token is expired" });
    } else {
      res.status(401).json({ error: "Request is not authorized" });
    }
  }
};

const getUserDetails = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ _id });
    return res.json(user);
  } catch (error) {
    // console.log(error);
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "user token is expired" });
    } else {
      res.status(401).json({ error: "Request is not authorized" });
    }
  }
};
export { register, login, authUser, getUserDetails };
