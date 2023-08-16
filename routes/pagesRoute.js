const express = require('express')
const {home,post,contact, aboutUs} = require('../controllers/pageController')

const app = express.Router()


app.get('/',home)

app.get('/about-us',aboutUs)
app.get('/post',post)
app.get('/contact',contact)


module.exports=app
