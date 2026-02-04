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
}

module.exports = articleController;