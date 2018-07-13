const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const {ObjectID} = require('mongodb');
const bodyParser = require('')

var {StudentInfo} = require('./models/student');
var {TeacherInfo} = require('./models/teacher');

mongoose.connect(keys.mongodbURI);
let db = mongoose.connection;

db.use

db.once('open', () => {
    console.log('Successful Connection to Database');
})

db.on('error', (err) => {
    console.log('MongoDB Connection: ' + err);
})