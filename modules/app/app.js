require('dotenv').config();
const {CLIENT_ORIGIN} = require('../../config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));
app.use('/api/cat', require('../cat/cat.router'));
app.use('/api/dog', require('../dog/dog.router'));

module.exports = app;
