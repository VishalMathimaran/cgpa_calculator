const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser')
const port = 8080 || process.env.PORT;
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));
let cgpa = 0
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("index.ejs", {
    home: home,
    cgpa:cgpa
  })
})
home = []
app.post("/", function(req, res) {
  console.log("Post method")
  let data = req.body
  if (home.length === 0)
    home = [data]

  else {
    home.push(data)
  }
  let cgpa = 0
  let total = 0
  home.forEach(function(element){
    console.log(element)
    if(typeof(element.grade)==="object"){
    for(i=0;i<element.grade.length;i++){
      cgpa=cgpa+element.grade[i]*element.credit[i]
      total=total+element.credit[i]*10
    }
  }
  })
  cgpa=cgpa / total
  console.log(home)
  res.render("index.ejs", {
    home: home,
    cgpa:cgpa
  })
})

app.get('/refresh', function(req, res) {
  home = []
  console.log(home)
  cgpa = 0
  res.render("index.ejs", {
    home: home,
    cgpa:cgpa
  })
})
app.listen(port, function() {
  console.log("Server is running at port " + port);
})
