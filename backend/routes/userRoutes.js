import express from "express";
import { signupUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", signupUser);

export default router;
