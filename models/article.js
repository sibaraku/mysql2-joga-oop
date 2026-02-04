const BaseSQLModel = require('./base');

class articleModel extends BaseSQLModel {
  constructor() {
    super('article');
  }

  async findAll() {
    const articles = await super.findAll();
    return articles;
  }

  async findOne(slug) {
    const article = await super.findOne('slug', slug);
    return article;
  }

  async findByAuthorId(authorId) {
    return await super.findMany('author_id', authorId);
  }

  async create(article) {
    const creayedArticleId = await super.create(article);
    return creayedArticleId;
  }
}

module.exports = articleModel;