const Task = require('../models/task.model')

async function getTasks(req, res) {
    try{
        const tasks = await Task.find()

        if(tasks.length === 0) {
            return res.status(404).send({
                ok: false,
                message: 'No hay tareas guardadas'
            })
        }
        
        res.status(200).send({
            ok: true,
            message: 'Tareas obtenidas correctamente',
            tasks
        })
    } catch(error) {
        res.status(500).send({
            ok: false,
            message: 'Error al obtener tareas'
        })
    }
}

async function getTaskById(req, res) {
    try{
        const idTask = req.params.idTask
        
        const task = await Task.findById(idTask)

        if(!task) {
            return res.status(404).send({
                ok: false,
                message: 'No existe esa tarea'
            })
        }
        
        res.status(200).send({
            ok: true,
            message: 'Tarea obtenida correctamente',
            task
        })
    } catch(error) {
        res.status(500).send({
            ok: false,
            message: 'Error al obtener tarea'
        })
    }
}

async function postTask(req, res) {
    try{
        const task = new Task(req.body)

        const newTask = task.save()
        
        res.status(200).send({
            ok: true,
            message: 'Tarea creada correctamente',
            task
        })
    } catch(error) {
        res.status(500).send({
            ok: false,
            message: 'Error al crear tarea'
        })
    }
}

module.exports = {
    getTasks, getTaskById, postTask
}