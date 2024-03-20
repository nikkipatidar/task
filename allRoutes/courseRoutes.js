const express = require('express')
const { addcourse, findcourse, deletecourse, updatecourse } = require('../controllers/courseController')


const router = express.Router()

router.route('/Add').post(addcourse)
router.route('/get/:id').get(findcourse)
router.route('/Update/:id').patch(updatecourse)
router.route('/delete/:id').delete(deletecourse)

module.exports = router