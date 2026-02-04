const AuthorDbModel = require('../models/author');
const ArticleDbModel = require('../models/article');

const authorModel = new AuthorDbModel();
const articleModel = new ArticleDbModel();

class authorController {
  async getAuthorById(req, res) {
    const author = await authorModel.findById(req.params.author_id);

    const articles = await articleModel.findByAuthorId(author.id);
    author.articles = articles;

    res.status(200).json({ author });
  }
}

module.exports = authorController;