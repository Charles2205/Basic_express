
const fs = require('fs')
const userUrl = require('url')

const home =(req,res)=>{
    const data =fs.readFileSync(__dirname+'/../views/home.html',{encoding:"utf-8"})
    res.send(data)

}

const aboutUs =(req,res)=>{
    res.send('Hello About')

}

const services =(req,res)=>{
    res.send('Hello About')

}

const contact =(req,res)=>{
    res.send('Hello Contact')

}

module.exports={
    home,
    aboutUs,
    services,
    contact,
    

}