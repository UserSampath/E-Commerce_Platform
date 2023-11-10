import express from "express";
import {
  register,
  login,
  authUser,
  getUserDetails,
  getUser
} from "../controllers/authentication.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
// router.post("/logout", Auth.logoutUser);
router.post("/authUser", authUser);

router.post("/getUserDetails", getUserDetails);

router.get("/getUserId/:id",getUser);
// router.post("/password-reset/:id/:token", Auth.resetPwd);
export default router;
