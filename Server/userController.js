const User = require('./model');
const UserController = {};

UserController.createUser = (req, res, next) => {
  const { name } = req.body;
      User.create(name)
        .then( user => {
          res.locals.user = user;
          return next();
        })
       .catch(err => next({log: 'err in UserController, createUser', message: {err: 'err in UserController, createUser'}}))
      }


UserController.loginUser = (req, res) => {
  User.findOne({name: req.body})
    .then(user => {
      res.locals.user = user
      return next()
    })
    .catch(err => next({log: 'catch in loginUser', message: {err: 'catch in loginUser'}}))
}

UserController.getUser = (req, res) => {
  User.findOne({name: req.body.params}).exec()
  .then(user => {
    res.locals.goals = user
    return next()
  })
  .catch(err => next({log: 'err in getUser', message: {err: 'err in getUser'}}))
}

module.exports = UserController;