const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');


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

    app.use('/api', apiRouter);




app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;