import express from 'express';
import CommentController from '../controllers/comment.controller';
import { createCommentValidator, updateCommentValidator, validateCommentId, validateArticleId } from '../validators/commentValidator';
import {validateRequest} from "../middleware/validateRequest";

const router = express.Router();
const commentController = new CommentController();

router.get('/comments', commentController.getAll);
router.get('/comments/:id', validateCommentId, validateRequest, commentController.getCommentById);
router.get('/articles/:articleId/comments', validateArticleId, validateRequest, commentController.getCommentsByArticleId);
router.post('/comments', createCommentValidator, validateRequest, commentController.createComment);
router.put('/comments/:id', validateCommentId, updateCommentValidator, validateRequest, commentController.updateComment);
router.delete('/comments/:id', validateCommentId, validateRequest, commentController.deleteComment);

export default router;
