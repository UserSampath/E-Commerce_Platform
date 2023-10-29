import jwt from "jsonwebtoken";


const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: 259200 });
};
export default createToken;