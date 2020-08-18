const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const keys = require('../config/key');
const router = require('./../middleware/router');

app.use(express.json());

// connect to database
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Database is connected');
  })
  .catch((error) => {
    console.log('Error In Database Connection');
  });

app.use('/', router);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
