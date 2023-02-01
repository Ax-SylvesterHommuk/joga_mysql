// Installed basic packages
// Added author name into single article
const express = require('express')
const con = require('./utils/db')
const authorRoutes = require('./routes/author')
const app = express()

const path = require('path')

const hbs = require('express-handlebars')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))

app.use(express.static('public'));

const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to joga_mysql database successfully!')
})

const articleRoutes = require('./routes/article');

app.use('/', articleRoutes)
app.use('/article', articleRoutes)
app.use('/author', authorRoutes)

app.listen(3000, () => {
    console.log('App is started at http://localhost:3000 (https won\' work!)') // HTTPS dosen't work, cause this protocol isn't secure :P
})