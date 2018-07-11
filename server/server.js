const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongodbURI);
let db = mongoose.connection;

db.once('open', () => {
    console.log('Successful Connection to Database');
})

db.on('error', (err) => {
    console.log('MongoDB Connection: ' + err);
})