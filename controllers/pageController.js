const fs = require('fs')
const userUrl = require('url')


const home =(req,res)=>{
    res.render('pages/index')
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