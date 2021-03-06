var mongoose = require('mongoose');

var TeacherInfo = mongoose.model('TeacherInfo', {
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
    }
})

module.exports = {TeacherInfo}