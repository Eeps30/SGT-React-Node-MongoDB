var mongoose = require('mongoose');

var StudentInfo = mongoose.model('StudentInfo', {
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    course: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    grade: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    active: {
        type: Number,
        default: 1
    },
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
    }]
})

module.exports = {StudentInfo}