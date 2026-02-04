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
}

module.exports = articleModel;