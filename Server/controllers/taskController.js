
const User = require('../model/model');
const taskController = {};

taskController.addTask = (req, res, next) => {
    const { name } = req.params
    const { task } = req.body
    User.findOneAndUpdate(
        {name},
        {$push: {"task": task}},
        {new: true}
    )
    .then(data => {
        res.locals.task = data.task
        return next();
    })
    .catch(err => next({log: 'err in taskController.addTask', message: {err: 'err in taskController.addTask'}}))
}

taskController.deleteTask = (req, res, next) => {
    const { name } = req.params
    const { task } = req.body
    User.findOneAndUpdate(
        {name},
        {$pull: {task}},
    )
    .then(data => {
        res.locals.task = data;
    })
    .catch(err => next({log: 'err in taskController.deleteTask', message: {err: 'err in taskController.deleteTask'}}))
}

module.exports = taskController;