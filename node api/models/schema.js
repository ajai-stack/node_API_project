const mongoose = require('mongoose')
const EmployeeSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobilenumber:{
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('employee', EmployeeSchema)