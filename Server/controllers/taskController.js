
const User = require('../model/model');
const taskController = {};

taskController.addTask = (req, res, next) => {
    const { name } = req.params
    const { task } = req.body
    console.log(name,task)
    console.log(req.params, req.body)
    User.findOneAndUpdate(
        {name},
        {$push: {"task": task}},
        {new: true}
    )
    .then(data => {
        res.locals.task = data
        return next();
    })
    .catch(err => next({log: 'err in taskController.addTask', message: {err: 'err in taskController.addTask'}}))
}

module.exports = taskController;