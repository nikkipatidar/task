const express = require('express')
const { addResult, findResult } = require('../controllers/resultController')


const router = express.Router()

router.route('/Add').post(addResult)
router.route('/get/:id').get(findResult)

module.exports = router