
const mongoose = require('mongoose')

const formschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    creatAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('form',formschema)