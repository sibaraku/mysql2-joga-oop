const articleModel = require('../models/article');
const articleModelInstance = new articleModel();

class articleController {
    constructor() {
        const articles = [];
    }

    async getAllArticles(req, res) {
        const articles = await articleModelInstance.findAll();
        res.status(200).json({ articles });
    }
}

module.exports = articleController;