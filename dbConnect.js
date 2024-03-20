const mongoose = require('mongoose')

const dbConnect = (url) => {
    mongoose.connect(url).then(() => { console.log('dbConnected') })
}
module.exports = dbConnect