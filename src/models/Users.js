const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    ip: {
        type: String,
        trim: true         
    },
    user1: {
        type: String,
        trim: true         
    },
    user2: {
        type: String,
        trim: true         
    },
    phone: {
        type: Number       
    },
    date: {
        type: Date,
        default: Date.now
    },
})







const User = mongoose.model('User', userSchema)

module.exports = User
