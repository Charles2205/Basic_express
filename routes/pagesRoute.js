const express = require('express')
const {home,services,contact, aboutUs} = require('../controllers/pageController')

const app = express.Router()


app.get('/',home)
app.get('/Home',home)
app.get('/About-us',aboutUs)
app.get('/Services',services)
app.get('/Contact',contact)


module.exports=app
