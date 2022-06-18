const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const UserController = require('./userController')


const app = express();
const PORT = 3000;

const MONGO_URI = 'mongodb+srv://jballey:WyvAJVhvtYDtS2g@cluster.rnmr8.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Solo-Project'
  })
    .then(() => console.log('Connected to Mongo DB.Test'))
    .catch(err => console.log(err));

    app.use(express.json())

    app.post('/signup', UserController.createUser, (req, res) => {
      return res.status(200).send(res.locals.user)
    })

    app.post('/login', UserController.loginUser, (req, res) => {
      return res.status(200).redirect('/:name')
    })

    app.get('/:name', UserController.getUser, (req, res) => {
      return res.status(200).send(res.locals.goals)
    })
    
    app.get('/', (req, res) => {
    return res.status(200).send()
  });




app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;