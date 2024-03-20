const interviewModel = require('../models/interviewModel')



const addInterview = async (req, res) => {
    try {
        const { studentName, course, company, date } = req.body
        console.log(req.body)
        const result = await interviewModel.create(req.body)
        res.status(200).send({ success: true, msg: "add-interview", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "does not add course", data: {}, error })
    }
}


const findInterview = async (req, res) => {
    try {
        const result = await interviewModel.findOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: "interview detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}
const updateInterview = async (req, res) => {
    try {
        let { studentName, course, company, date } = req.body
        const result = await interviewModel.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).send({ success: true, msg: " interview detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}
const deleteInterview = async (req, res) => {
    try {
        const result = await interviewModel.deleteOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: " delete data", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}

module.exports = { addInterview, findInterview, updateInterview, deleteInterview }