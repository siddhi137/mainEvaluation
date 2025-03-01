const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const appointmentSchema = new mongoose.appointmentSchema({
    patientId: {type: String, ref: "user"},
    doctorId: {type: String, ref: "user"},
    mobileNumber: {type: String, required: true},
    symptoms: {type: String, required: true},
    fees: {type: Number, required: true},
    prescription: {type: String, required:true},
    isDiagnosisDone: {type: Boolean, required: true}
})