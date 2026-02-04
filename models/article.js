const BaseSQLModel = require('./base');

class articleModel extends BaseSQLModel {
  constructor() {
    super('article');
  }

  async findAll() {
    const articles = await super.findAll();
    return articles;
  }
}

module.exports = articleModel;