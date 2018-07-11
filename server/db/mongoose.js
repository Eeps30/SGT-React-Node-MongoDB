var mongoose = require('mongoose');

mongoose.connect(keys.mongodb_URI);

module.exports = {mongoose}