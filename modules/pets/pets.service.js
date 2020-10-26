const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    return {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    };
  },

  dequeue(type) {
    if(type === 'dog') {
      return pets.dogs.dequeue();
    }
    else if(type === 'cat') {
      return pets.cats.dequeue();
    }
  }
};
