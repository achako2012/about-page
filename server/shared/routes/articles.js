import { Router } from 'express';
import { createArticle, deleteArticleById, getArticleById, getArticles } from "../controllers/articles-api-controller.js";
const router = Router();
// TODO remove ts-ignore
// @ts-ignore
router.get("/articles-api/articles-list", getArticles);
// @ts-ignore
router.get("/articles-api/article/:uid", getArticleById);
// @ts-ignore
router.post(`/articles-api/articles-list`, createArticle);
// @ts-ignore
router.delete(`/articles-api/articles-list`, deleteArticleById);
export default router;
//# sourceMappingURL=articles.js.map