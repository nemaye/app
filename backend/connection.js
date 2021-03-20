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
        required: false,
    },
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('userCollection', User);