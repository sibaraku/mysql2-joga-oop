const AuthorDbModel = require('../models/author');
const ArticleDbModel = require('../models/article');

const authorModel = new AuthorDbModel();
const articleModel = new ArticleDbModel();

class authorController {
    async getAuthorById(req, res) {
            const author = await authorModel.findById(req.params.author_id);
            const articles = await articleModel.findMany(author);
            author.articles = articles;
            res.status(201).json({author: author } );
    }
}

module.exports = authorController;