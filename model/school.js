
const mongoose = require('mongoose')

const schoolschema = new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    creatAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('school',schoolschema)