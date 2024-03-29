const express = require('express')
const dbConnect = require('./dbConnect')
const bodyParser = require('body-parser')
const employees = require('./allRoutes/employees')
const stdRoutes = require('./allRoutes/stdRoutes')
const courseRoutes = require('./allRoutes/courseRoutes')
const interviewRoutes = require('./allRoutes/interviewRoutes')
const resultRoute = require('./allRoutes/resultRoute')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 5000;

dbConnect('mongodb://0.0.0.0:27017/task1')
app.use('/', employees)
app.use('/std', stdRoutes)
app.use('/course', courseRoutes)
app.use('/intreview', interviewRoutes)
app.use('/result', resultRoute)
app.listen(PORT, () => { console.log('server is connected', `${PORT}`) })