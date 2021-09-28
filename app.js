const express = require('express');
const app=express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'Frontend'))
app.get('/',(req,res)=>{
    res.render('Home');
})
app.get('/about',(req,res)=>{
    res.render('About.ejs')
})
app.get('/login',(req,res)=>{
    res.render('login');
    console.log("Signing In...");
})
app.get('/register',(req,res)=>{
    res.render('register');
    console.log("Registering...");
})
app.listen(3000,()=>{
    console.log("listening to port 3000");
})