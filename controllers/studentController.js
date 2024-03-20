const stdModel = require('../models/studentMode')

const addStudent = async (req, res) => {
    try {
        const { name, email, course, college, status } = req.body
        const result = await stdModel.create(req.body)
        res.status(200).send({ success: true, msg: "add student", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "does not add student", data: {}, error })
    }
}


const findStudent = async (req, res) => {
    try {
        const result = await stdModel.findOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: " student detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}
const updateStudent = async (req, res) => {
    try {
        const { name, email, course, college, status } = req.body
        const result = await stdModel.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).send({ success: true, msg: "update student", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "does not update student", data: {}, error })
    }
}
const deleteStudent = async (req, res) => {
    try {

        const result = await stdModel.deleteOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: "delete data", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something wend wrong", data: {}, error })
    }
}


module.exports = {
    addStudent, findStudent
    , updateStudent, deleteStudent
}