


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('user', userSchema);