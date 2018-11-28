var mongoose = require('mongoose');

var ClassesInfo = mongoose.model('ClassesInfo', {
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    teacherID: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    studentsIDArray: {
        type: Array,
        required: true,
        minlength: 1,
        default: []
    }
})

module.exports = {ClassesInfo}