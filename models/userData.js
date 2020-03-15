const mongoose = require('mongoose');

const userDataSchema = mongoose.Schema({
    name: String,
    email: String,
    app_instance_ID: String,
    fb_ID: String,
    preferences: [String]

});

module.exports = mongoose.model('UserData', userDataSchema);

