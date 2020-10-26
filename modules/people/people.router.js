const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json(People.get());
});

router.post('/', json, (req, res) => {
  const {person} = req.body;
  if(!person) {
    return res.status(400).json('Body must contain string "person"');
  }
  if(People.get().includes(person)) {
    return res.status(400).json('No duplicate names');
  }
  People.enqueue(person);
  return res.status(202).end();
});

module.exports = router;
