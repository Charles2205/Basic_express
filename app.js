const express = require('express')
const dotEnv = require('dotenv')
const userRoute = require('./routes/pagesRoute')

dotEnv.config()
const PORT = process.env.PORT || 1209

const app = express()

app.use('/',userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})