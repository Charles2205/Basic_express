const express = require('express')
const dotEnv = require('dotenv')
const userRoute = require('./routes/pagesRoute')
const ejs = require('ejs')

dotEnv.config()
const PORT = process.env.PORT || 1209

const app = express()

app.set('view engine','ejs')

app.use('/',userRoute)
app.use(express.static('public'))


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})