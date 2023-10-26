import express from "express";
import { register, login } from "../controllers/authentication.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
// router.post("/logout", Auth.logoutUser);

// router.post("/password-reset/:id/:token", Auth.resetPwd);
export default router;
