const express = require('express');
const json = require('body-parser').json();

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  });
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
});

module.exports = router;
