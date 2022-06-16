const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.status(200).send('hello')
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;