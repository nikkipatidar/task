const { Schema, model } = require('mongoose')

const resultSchema = new Schema({


    studentName: {
        type: String,
        require: true
    },

    company: {
        type: String,
        require: true
    },
    resultData: {
        type: String,
        require: true
    }


}, { timestamps: true }
)

const resultModel = model('result', resultSchema)

module.exports = resultModel

