const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://m220student:m220password@sandbox.ta5ilqv.mongodb.net/school-db');

//data squema 
const notesSchema = {
  item: String,
  qty: Number
}



const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function (req, res) {
  let newNote = new Note({
    item: req.body.item,
    qty: req.body.qty
  });
  newNote.save();
  res.redirect('/');
})


app.listen(3000, function () {
  console.log("server is running. Listen on port 3000");
  console.log("Here we are");
})