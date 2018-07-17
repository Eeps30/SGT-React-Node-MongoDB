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

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//all paths go below this line

app.post('/api/addNewStudent', (req, res) => {
    console.log(req.body);
    var newStudent = new StudentInfo({
        name: req.body.name,
        course: req.body.course_name,
        grade: req.body.grade
    })

    newStudent.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })

    res.json({
        success: true
    })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
