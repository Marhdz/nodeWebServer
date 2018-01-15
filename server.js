const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partial')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.render('welcome.hbs',{
    name: 'Mich',
    status: 'anxiety',
    currentYear: new Date().getFullYear()
  });
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});
app.get('/bad',(req,res)=>{
  res.send({
    name: 'wrong!',
    status: 'sorry, the programmer is a noob'
  });
});
app.listen(3000);