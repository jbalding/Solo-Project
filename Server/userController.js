const User = require('./model');
const UserController = {};

UserController.createUser = async(req, res, next) => {
    try{
        const user = await User.create(req.body);
        res.locals.user = user;
        return next();
      } catch (err){
        return next({log: 'err in UserController, createUser', message: {err: 'err in UserController, createUser'}});
      }
}

module.exports = UserController;