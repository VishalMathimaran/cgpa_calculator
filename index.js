const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser')
const port = 8080 || process.env.PORT;        //Use  environment variable PORT or default 8080
let cgpa = 0  //cummulative gpa value
let gpas = []   //array of gpas
let current = [] //array of current semester grades with subject

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true      //enable bodyparser to use req.body
}));
app.set('view engine', 'ejs');    //set view engine to use ejs


app.get("/", function(req, res) {
  res.render("index.ejs", {
    //render the ejs file index.ejs with all three values eventhough only cgpa is used for further enhancement
    current: current,
    cgpa: cgpa,
    gpas: gpas
  })
})
// <-----------------------------------------Get the CGPA With given information --------------------------------------------------->
app.post("/", function(req, res) {
  console.log("Post method")
  let data = req.body     //store the request into data
  current = [data]
  let gpa = 0
  let cgpa = 0
  let total = 0
  current.forEach(function(element) {
    if (typeof(element.grade) === "object") {       //if there are more than one subject
      for (i = 0; i < element.grade.length; i++) {
        gpa = gpa + Number(element.grade[i]) * Number(element.credit[i])
        total = total + parseInt(element.credit[i])
      }
    } else {      //if there is only one subject
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
    current: current,
    cgpa: cgpa,
    gpas: gpas
  })
})
// <-----------------------------------------Clears all the previous information --------------------------------------------------->
app.get('/refresh', function(req, res) {
  current = []
  gpas = []
  console.log(current)
  cgpa = 0
  res.render("index.ejs", {
    current: current,
    cgpa: cgpa,
    gpas: gpas
  })
})
app.listen(port, function() {
  console.log("Server is running at port " + port);
})
