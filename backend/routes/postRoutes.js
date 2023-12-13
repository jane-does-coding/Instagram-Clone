import express from "express";
import {
  createPost,
  deletePost,
  getPost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
