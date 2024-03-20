const courseModel = require('../models/courseScoreModel')


const addcourse = async (req, res) => {
    try {
        const { studentName, DSAFinalScore, WebDFinalScore, ReactFinalScore } = req.body
        console.log(req.body)
        const result = await courseModel.create(req.body)
        res.status(200).send({ success: true, msg: "add-course", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "does not add course", data: {}, error })
    }
}


const findcourse = async (req, res) => {
    try {
        const result = await courseModel.findOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: "course detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}
const updatecourse = async (req, res) => {
    try {
        let { studentName, DSAFinalScore, WebDFinalScore, ReactFinalScore } = req.body
        const result = await courseModel.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).send({ success: true, msg: " course detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}
const deletecourse = async (req, res) => {
    try {
        const result = await courseModel.deleteOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: " delete data", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}

module.exports = { addcourse, findcourse, updatecourse, deletecourse }