import { Router } from 'express';
import { createArticle, deleteArticle, getArticles } from "../controllers/articles-api-controller.js";
const router = Router();
// TODO remove ts-ignore
// @ts-ignore
router.get("/articles-api/articles-list", getArticles);
// @ts-ignore
router.post(`/articles-api/articles-list`, createArticle);
// @ts-ignore
router.delete(`/articles-api/articles-list`, deleteArticle);
export default router;
//# sourceMappingURL=articles.js.map