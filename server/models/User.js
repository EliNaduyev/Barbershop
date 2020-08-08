const mongoose = require('mongoose')

const newUser = new mongoose.Schema({

    email:{
        type:String

    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    phone:{
        type:String
    }
 })

 module.exports = mongoose.model('users', newUser)
 // first param its the collection name in mongoDB atals
