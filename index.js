const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article.js')
const articleController = new articleControllerClass()
const authorRouter = require('./routers/authors.js');

const articleRouters = require('./routers/articles.js')
app.use('/articles', articleRouters);
app.use('/author/', authorRouter);

app.listen(3025, () => {
  console.log('Server is running on http://localhost:3025')
})