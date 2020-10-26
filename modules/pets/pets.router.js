const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json(Pets.get());
});

router.delete('/', json, (req, res) => {
  const {type} = req.body;
  if(!type || (type !== 'cat' && type !== 'dog')) {
    return res.status(400).json('Body must contain type of either "cat" or "dog"');
  }
  Pets.dequeue(type);
  People.dequeue();
  return res.status(202).end();
});

module.exports = router;
