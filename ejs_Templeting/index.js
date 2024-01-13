const exp = require("constants");
const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get('/r/:branch',(req,res)=>{
    const{branch} = req.params;
    res.render('branch',{branch});
})

app.get('/cats',(req,res)=>{
    const cats = ['pussy','sussy','mussy','gussy']
    res.render('cats',{cats})
})

app.get("/rand",(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('random' ,{rand:num})
})

app.listen(3000,()=>{
    console.log("Running on port 3000")
})