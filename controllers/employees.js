const empModel = require('../models/empModel')
const jwt = require('jsonwebtoken')



const signup = async (req, res) => {
    let { name, email, password, confirmPassword } = req.body
    if (!name) {
        res.status(400).send({ msg: "required name" })
    }
    if (!email) {
        res.status(400).send({ msg: "required email" })
    }
    if (!password) {
        res.status(400).send({ msg: "required password" })
    }
    if (confirmPassword === req.body.password) {
        try {
            const result = await empModel.create({ name, email, password })

            return res.status(200).json({
                success: true, msg: "success", result
            })
        } catch (error) {
            res.status(400).send({ succes: false, error })

        }
    } else {
        res.send("password not match")
    }

}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        let result = await empModel.matchPassword(email, password)
        console.log(result)
        if (result) {
            const payload = { name: result.name, email: result.email }
            const token = jwt.sign(payload, 'abc', { expiresIn: "1h" })
            res.status(200).json({ msg: " login success", data: result, token, error: "" })
        }
        else
            res.status(400).json({ msg: "failed", data: {}, error: "wrong password" })

    } catch (error) {
        res.status(400).json({ msg: "failed", data: {}, error: error })

    }

}


module.exports = { signup, login }     