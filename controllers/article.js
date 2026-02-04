const articleDbModel = require('../models/article');
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = [];
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll();
        res.status(201).json({ articles: articles });
    }

    async findMany(author) {
        const result = await super.findMany('author_id', author.id);
        return result;
    }

    async getArticleBySlug(req, res) {
        const article =  await articleModel.findOne(req.params.slug);
        res.status(201).json({ article: article });
    }

    async createNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        } 
        const newArticleId = await articleModel.create(newArticle);
        res.status(201).json({ 
            message: `Created article with id ${newArticleId}`, 
            article:{ id: newArticleId, ...newArticle } 
        });
    }

    async updateArticle(req, res) {
        const articleId = req.params.id;
        const articleData = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            author_id: req.body.author_id
        };

        const affectedRows = await articleModel.update(articleId, articleData);

        res.status(200).json({
        message: 'Article updated successfully',
        affectedRows,
        article: { id: articleId, ...articleData }
        });
    }
}

module.exports = articleController;