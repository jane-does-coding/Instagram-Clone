import express from "express";
import {
  followUnfollowUser,
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/userControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);

export default router;
