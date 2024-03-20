const express = require('express')
const { addInterview, findInterview, updateInterview, deleteInterview } = require('../controllers/interviewController')


const router = express.Router()

router.route('/Add').post(addInterview)
router.route('/get/:id').get(findInterview)
router.route('/Update/:id').patch(updateInterview)
router.route('/delete/:id').delete(deleteInterview)

module.exports = router