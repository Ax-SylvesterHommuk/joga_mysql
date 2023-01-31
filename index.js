// Installed basic packages
const express = require('express')
const app = express()

const path = require('path')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
})

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to joga_mysql database successfully!')
})

app.listen(3000, () => {
    console.log('App is started at https://localhost:3000')
})