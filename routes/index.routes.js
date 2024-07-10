const router = require('express').Router()

const task_routes = require('./task.routes')

router.use([
    task_routes
])

module.exports = router