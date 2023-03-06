const express = require('express')
const app =express()
const port = process.env.PORT || 9000
const path = require('path')
const hbs = require('hbs')
const { dirname } = require('path')
//        path
const staticpath = path.join(__dirname+"/public")
const staticImg = path.join(__dirname+"/img")
const staticfile = path.join(__dirname+"/src")
const staticpartials = path.join(__dirname+"/views/partials")
const img2 = path.join(__dirname+"/img2")
const logo =path.join(__dirname+"/logo")
console.log(img2)

// SET VIEW ENGINE
app.set("view engine","hbs")
hbs.registerPartials(__dirname+"/views/partials")
//      CONFIG
app.use(express.static(staticpath))
app.use(express.static(staticImg))
app.use(express.static(staticfile))
app.use(express.static(img2))
app.use(express.static(logo))
app.use(express.urlencoded())
app.use(express.json())
// ROUTING

app.get("/",(req,res)=>{
    res.render("home")
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})-
app.get("/service",(req,res)=>{
    res.render("service")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/singin",(req,res)=>{
    res.render("singup")
})
app.get("/onme",(req,res)=>{
    res.render("onme")
})
app.get("/skill",(req,res)=>{
    res.render("skill")
})
app.get('/img2',(req,res)=>{
    res.render("img2")
})

// database connection

//SERVER
app.listen(port,(err)=>{
    if(err) throw err
    console.log(`your code is rub on localhost:${port}`)
})