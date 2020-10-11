const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'subscription',
    },
    cart: {
        type: Array,
        default: [],
    },
    address: String,

}, { timestramps: true })

module.exports = mongoose.model("User", userSchema);