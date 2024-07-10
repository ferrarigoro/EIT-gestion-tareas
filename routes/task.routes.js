const router = require('express').Router()
const taskController = require('../controllers/task.controller')

router.get('/tasks', taskController.getTasks)

router.get('/tasks/:idTask', taskController.getTaskById)

router.post('/tasks', taskController.postTask)

module.exports = router