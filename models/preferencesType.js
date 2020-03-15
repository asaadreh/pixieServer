const mongoose = require('mongoose');

const preferenceSchema = mongoose.Schema({
    preferenceID: String,
    preferenceName: String

});

module.exports = mongoose.model('PreferenceType', preferenceSchema);
