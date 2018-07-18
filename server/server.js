require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const cors = require('cors');
const path = require('path')
const http = require('http')

var {mongoose} = require('./db/mongoose');
var {StudentInfo} = require('./models/student');
var {TeacherInfo} = require('./models/teacher');

var app = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, '../client/public')

app.use(bodyParser.json());
app.use(express.static(publicPath))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//all paths go below this line

app.post('/api/addNewStudent', (req, res) => {
    var newStudent = new StudentInfo({
        name: req.body.name,
        course: req.body.course_name,
        grade: req.body.grade
    })

    newStudent.save().then((doc) => {
        res.send(doc);
        console.log('Student Added to DB');
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.get('/api/getStudents', (req, res) => {
    StudentInfo.find({}).then((student) => {
        res.send(student);
        console.log('All Students: ', student);
    })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
