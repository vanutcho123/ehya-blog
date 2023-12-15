import express from "express";
import { authGuard } from "../middleware/authMiddleware";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController";
const router = express.Router();

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;
