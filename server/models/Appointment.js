const { Mongoose } = require("mongoose")


const mongoose = require('mongoose')

const newAppointment = new mongoose.Schema({

    userID:{
        type:String
    },
    appointmentKey:{
        type:String
    },
    name:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },   
    phone:{
        type:String
    },
    day:{
        type:String
    },
    timeInMS:{
        type:Number
    }
 })

 module.exports = mongoose.model('appointments', newAppointment)
  // first param its the collection name in mongoDB atals
