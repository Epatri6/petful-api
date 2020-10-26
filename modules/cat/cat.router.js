const express = require('express');
const json = require('body-parser').json();

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
  });
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
});

module.exports = router;
