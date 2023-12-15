import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  replyToPost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likePost);
router.post("/reply/:id", protectRoute, replyToPost);

export default router;
