import express from "express";
import {
  followUnfollowUser,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
} from "../controllers/userControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update/:id", protectRoute, updateUser);

export default router;
