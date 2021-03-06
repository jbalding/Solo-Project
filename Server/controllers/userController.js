const User = require('../model/model');
const UserController = {};

UserController.createUser = (req, res, next) => {
 const { name, task } = req.body;
  console.log(req.body)
      User.create({name, task})
        .then( user => {
          res.locals.user = user;
          return next();
        })
       .catch(err => next({log: 'err in UserController, createUser', message: {err: 'err in UserController, createUser'}}))
      }


UserController.getUser = (req, res, next) => {
  const { name } = req.params
  console.log("name in get user", name)
  User.findOne({name})
  .then(user => {
    res.locals.user = user.task
    console.log("user",res.locals.user)
    return next()
  })
  .catch(err => next({log: 'err in getUser', message: {err: 'err in getUser'}}))
}

module.exports = UserController;