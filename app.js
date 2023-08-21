const express = require('express')
const dotEnv = require('dotenv')
const userRoute = require('./routes/pagesRoute')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');


dotEnv.config()
const PORT = process.env.PORT || 1209

const app = express()

app.set('view engine','ejs')

// adding middlewares
app.use(express.static('public'))
app.use(expressLayouts)


//user routes
app.use('/',userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})