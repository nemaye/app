const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// creating schema

const User = new Schema({
    username: {
        type: String,
        required: [ true,'Name is required']
    },
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    profilePic: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('users', User);