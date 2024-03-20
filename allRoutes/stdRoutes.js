const express = require('express')
const { findStudent, addStudent, updateStudent, deleteStudent } = require('../controllers/studentController')

const router = express.Router()

router.route('/Add').post(addStudent)
router.route('/get/:id').get(findStudent)
router.route('/Update/:id').patch(updateStudent)
router.route('/delete/:id').delete(deleteStudent)

module.exports = router