const resultModel = require('../models/resultModel')

const addResult = async (req, res) => {
    try {
        const { studentName, company, resultData } = req.body
        console.log(req.body)
        const result = await resultModel.create(req.body)
        res.status(200).send({ success: true, msg: "add-result", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "does not add result", data: {}, error })
    }
}


const findResult = async (req, res) => {
    try {
        const result = await resultModel.findOne({ _id: req.params.id })
        res.status(200).send({ success: true, msg: "result detail", data: result })
    } catch (error) {
        res.status(400).send({ success: false, msg: "something went wrong", data: {}, error })
    }
}

module.exports = { findResult, addResult }