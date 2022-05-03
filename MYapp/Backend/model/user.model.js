const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    pin: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255
    },
    role: {
        type: String,
    },
    userName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('user', userSchema);