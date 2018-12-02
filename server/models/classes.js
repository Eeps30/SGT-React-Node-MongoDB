var mongoose = require('mongoose');

var ClassesInfo = mongoose.model('ClassesInfo', {
    className: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    teacherID: {
        type: Number,
        required: false,
        minlength: 1,
        trim: true
    },
    studentsIDArray: {
        type: Array,
        required: false,
        minlength: 1,
        default: []
    },
    numberOfStudents: {
        type: Number
    },
    days: {
        type: String
    }
})

module.exports = {ClassesInfo}