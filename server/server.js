require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const cors = require('cors');
const path = require('path');
const http = require('http');
const keys = require('./config/keys');

// var {mongoose} = require('./db/mongoose');
var mongoose = require('mongoose');
var {StudentInfo} = require('./models/studentEntry');
var {TeacherInfo} = require('./models/teacher');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, '../client/public')

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//try connecting to mongodb and test connection

mongoose.connect(keys.mongoURI);
let db = mongoose.connection;

db.once('open', () => {
    console.log("MongoDB Connection: Successful");
});

db.on('error', (err) => {
    console.log("MongoDB Connection: " + err);
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
    }).catch((e) => {
        console.log(e);
    })
})

app.post('/api/newUser', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
  
    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
});

app.post('/api/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      })
    }).catch((e) => {
      res.send(e);
    })
})

app.delete('/api/deleteStudent/:id', (req, res) => {
    var id = req.params.id;
    console.log('ID from the front end: ', id)

    StudentInfo.findByIdAndRemove(id).then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.get('/api/getStudents', (req, res) => {
    StudentInfo.find({}).then((student) => {
        res.send(student);
    })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
