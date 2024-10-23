class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // IS THE NEXT VALUE ISNULL WE ARE FINIDING THAT LINKED OBJECTS
  // AND WE ARE APPENDING THE NEW OBJECTS AT THE END
  // CONSOLE THE HEAD IF YOU HAVE ANY DOUGHTS

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  printNodeObj() {
    return this.head;
  }
  // function for inserting a new node
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      return this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
      // this loop will iterate over an object untill it will reach its index
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      let removenode = this.head;
      this.head = removenode.next;
    } else {
      let prev = this.head;
      let spreadval = this.head;
      for (let i = 0; i < index + 1; i++) {
        prev = prev.next;
      }
      for (let i = 0; i < index - 1; i++) {
        spreadval = spreadval.next;
      }
      spreadval.next = prev;
      this.size--;
      console.log("dsd", prev, spreadval);
    }
  }

  searchVal(value) {
    if (value < 0) {
      return;
    }
    let i = 0;
    let iterator = this.head;
    while (iterator.next !== null) {
      console.log("sdsd", iterator);
      if (iterator.value === value) {
        return i;
      }
      iterator = iterator.next;
      i++;
    }

    return -1;
  }

  print1() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let list;
      let curr;
      // actuall we changing the constant variable that is assigned for the while loop so we could be able the change the objects
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const l = new LinkedList();

console.log(l.isEmpty());
l.append(10);
l.append(12);
l.append(20);
l.insert(30, 2);
console.log(l.printNodeObj());
