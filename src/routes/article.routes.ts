import { Router } from 'express';
import ArticleController from "../controllers/article.controller";
import {createArticleValidator, updateArticleValidator, validateArticleId} from "../validators/articleValidator";
import {validateRequest} from "../middleware/validateRequest";

const router = Router();
const articleController = new ArticleController();

router.get('/', articleController.getAll);
router.get('/latest', articleController.getLatest);
router.get('/:id', validateArticleId, validateRequest, articleController.getArticleById);
router.post('/', createArticleValidator, validateRequest, articleController.createArticle);
router.put('/:id', validateArticleId, validateRequest, updateArticleValidator, validateRequest, articleController.updateArticle);
router.delete('/:id', validateArticleId, validateRequest, articleController.deleteArticle);

export default router;
