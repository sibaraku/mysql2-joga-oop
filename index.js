const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article.js')
const articleController = new articleControllerClass()

const articleRouters = require('./routes/articles.js')
app.use('/', articleRouters)

app.listen(3025, () => {
  console.log('Server is running on http://localhost:3025')
})