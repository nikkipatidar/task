const { Schema, model } = require('mongoose')

const stdSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    course: {
        type: String,
        require: true
    },
    college: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }

}, { timestamps: true }
)

const stdModel = model('student', stdSchema)

module.exports = stdModel