import express from 'express';
import CommentController from '../controllers/comment.controller';
import { createCommentValidator, updateCommentValidator, validateCommentId, validateArticleId } from '../validators/commentValidator';
import {validateRequest} from "../middleware/validateRequest";

const router = express.Router();
const commentController = new CommentController();

router.get('/', commentController.getAll);
router.get('/:id', validateCommentId, validateRequest, commentController.getCommentById);
router.get('/articles/:articleId/comments', validateArticleId, validateRequest, commentController.getCommentsByArticleId);
router.post('/', createCommentValidator, validateRequest, commentController.createComment);
router.put('/:id', validateCommentId, updateCommentValidator, validateRequest, commentController.updateComment);
router.delete('/:id', validateCommentId, validateRequest, commentController.deleteComment);

export default router;
