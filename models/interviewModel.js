const { Schema, model } = require('mongoose')

const interviewSchema = new Schema({


    studentName: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }


}, { timestamps: true }
)

const interviewModel = model('interview', interviewSchema)

module.exports = interviewModel

