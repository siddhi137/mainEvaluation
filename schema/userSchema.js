const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.userSchema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    mobileNumber: {type: string, required: true},
    password: {type: string, required: true},
    role: {type: string, enum:["admin", "doctor", "patient"], required: true},
    specialization: {type: string, enum:["nerves", "heart", "lungs", "skin"], required:true}
})