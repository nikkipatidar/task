const { Schema, model } = require('mongoose')

const courseSchema = new Schema({


    studentName: {
        type: String,
        require: true
    },
    DSAFinalScore: {
        type: Number,
        require: true
    },
    WebDFinalScore: {
        type: Number,
        require: true
    },
    ReactFinalScore: {
        type: Number,
        require: true
    }


}, { timestamps: true }
)

const courseModel = model('course', courseSchema)

module.exports = courseModel

