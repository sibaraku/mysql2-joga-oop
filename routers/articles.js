const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/article');
const articleController = new ArticleController();

router.get('/', (req, res) =>
  articleController.getAllArticles(req, res)
);

router.get('/:slug', (req, res) =>
  articleController.getArticleBySlug(req, res)
);

router.post('/', (req, res) =>
  articleController.createNewArticle(req, res)
);

router.put('/edit/:id', (req, res) =>
  articleController.updateArticle(req, res)
);

module.exports = router;
