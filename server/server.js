require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {StudentInfo} = require('./models/student');
var {TeacherInfo} = require('./models/teacher');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

//all paths go below this line

app.post('/addNewStudent', (req, res) => {
    var newStudent = new StudentInfo({
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    })

    newStudent.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
