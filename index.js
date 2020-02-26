const express = require("express");
const app  = express();
const path = require("path")
const bodyParser = require('body-parser')
const port = 8080||process.env.PORT;
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("index.ejs",{home:home})
})
home = []
app.post("/",function(req,res){
  console.log("Post method")
  let data = req.body
  if(home.length === 0)
    home = [data]

  else
    home.push(data)
  console.log(home)
  res.render("index.ejs",{home:home})
})

app.listen(port,function(){
  console.log("Server is running at port "+port);
})
