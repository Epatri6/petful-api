class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if(this.first === null) {
      this.first = node;
    }
    if(this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    if(this.first === null) {
      return;
    }
    return this.first.value;
  }

  all() {
    const result = [];
    let node = this.first;
    while(node !== null) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }
}

module.exports = Queue;
