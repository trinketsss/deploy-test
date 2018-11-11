const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

var ips = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//route
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    desc:ips
  });
});

//About
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    desc:ips
  })
});

//listener
app.listen(port,()=>{
  console.log('server online');
});
