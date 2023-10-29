import User from "../models/user.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/CreateToken.js";

const register = async (req, res, next) => {
  const { password, email } = req.body;

  let user;
  try {
    user = await User.findOne({ email: email });

    //if (user) return next(createError(409, "User already exists"));

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({
      ...req.body, // in the body passs the user roll
      password: hashedPassword,
    });

    await newUser.save();
    const token = createToken(newUser._id);
    res
    .status(200)
    .json({ email,  token,role: newUser.role,_id:newUser._id});
    res.status(201).send("New user has been created!");
   
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

    if (!user) return next(createError(404, "User Not found"));

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid)
      return next(
        createError(400, "Wrong password or username.Please try again!")
      );

    // to prevent send password to the user.send details without password
    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (err) {
    next(err);
  }
};

export { register, login };
