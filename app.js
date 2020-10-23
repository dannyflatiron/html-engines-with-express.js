const express = require('express')
// body parser is an npm package that needs to be installed for dev environment
// it is used to parse user submitted data
const bodyParser = require('body-parser')

const app = express()

const users = []

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (request, response, next) => {
  response.render('index', { pageTitle: 'Add User' })
})

app.get('/users', (request, response, next) => {
  response.render('users', { pageTitle: 'Users', users: users })
})

app.post('/add-user', (request, response, next) => {
  users.push({name: request.body.username})
  response.redirect('/users')
})

app.listen(3000)

