const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser')
const port = 8080 || process.env.PORT;
let cgpa = 0
let gpas = []
let home = []
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  res.render("index.ejs", {
    home: home,
    cgpa: cgpa,
    gpas: gpas
  })
})

app.post("/", function(req, res) {
  console.log("Post method")
  let data = req.body
  home = [data]
  let gpa = 0
  let cgpa = 0
  let total = 0
  home.forEach(function(element) {
    if (typeof(element.grade) === "object") {
      for (i = 0; i < element.grade.length; i++) {
        gpa = gpa + Number(element.grade[i]) * Number(element.credit[i])
        total = total + parseInt(element.credit[i])
      }
    } else {
      gpa = element.credit * element.grade + gpa
      total = total+ Number(element.credit)
    }
  })
  tempTotal = 0
  tempCGPA = 0
  gpas.push({
    gpa: gpa,
    total: total
  })
  gpas.forEach(function(element) {
    tempTotal = tempTotal + Number(element.total)
    tempCGPA = tempCGPA + Number(element.gpa)
  })
  cgpa = tempCGPA / tempTotal
  res.render("index.ejs", {
    home: home,
    cgpa: cgpa,
    gpas: gpas
  })
})

app.get('/refresh', function(req, res) {
  home = []
  gpas = []
  console.log(home)
  cgpa = 0
  res.render("index.ejs", {
    home: home,
    cgpa: cgpa,
    gpas: gpas
  })
})
app.listen(port, function() {
  console.log("Server is running at port " + port);
})
