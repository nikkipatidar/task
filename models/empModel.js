const { Schema, model } = require('mongoose')
const { createHmac, randomBytes } = require('crypto')

const empSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
    },
    salt: {
        type: String,
    }


}, { timestamps: true }
)

empSchema.pre('save', function (next) {
    user = this;
    if (user.isModified('password')) {
        const salt = randomBytes(16).toString()
        const hashPassword = createHmac('sha256', salt)
            .update(user.password)
            .digest('hex')
        this.salt = salt;
        this.password = hashPassword

    } next()
})

empSchema.static('matchPassword', async function (email, password) {
    let result = await empModel.findOne({ email })

    let newHash = createHmac('sha256', result.salt)
        .update(password)
        .digest('hex')

    if (newHash === result.password) {
        return result;
    } else {
        return false;
    }

})

const empModel = model('employees', empSchema)

module.exports = empModel