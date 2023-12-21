import express from "express";
import {
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  getUserPost,
  likePost,
  replyToPost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.get("/user/:username", getUserPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likePost);
router.post("/reply/:id", protectRoute, replyToPost);

export default router;
