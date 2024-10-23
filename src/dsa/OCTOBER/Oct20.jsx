import React from "react";

function Oct20() {
  // hash table collision
  class Hashtable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }

    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }

    sets(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [[key, value]];
      } else {
        // find the existing existin grecords
        let findrecord = this.table[index].find((s) => s[0] === key);
        if (findrecord) {
          findrecord[1] = value;
        } else {
          this.table[index] = [[key, value]];
        }
      }
    }

    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
    printTable() {
      return this.table;
    }
  }

  const n = new Hashtable(50);
  n.sets("name", "car");
  n.sets("price", 200);
  n.sets("status", "not buy able");
  n.sets("name", "lop");
  console.log(n.get("name"));
  console.log(n.get("price"));
  console.log("poodade", n.printTable());

  // TREE DATA STRUCTURES
  class Node {
    constructor() {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class Tree {
    constructor() {
      this.root = null;
    }

    isEmpty() {
      return this.root === null;
    }
  }

  let t = new Tree();

  console.log(t.isEmpty());
  // HOW DO YOU MAKE YOUR APP WITHOUT SECURITY ISSUES
  // Authentication : the user has to login first
  // Autherization : wheather the user have access to that api or not

  // Main diff between arrow and regular functions

  // Arrow Functions
  let arr = [1, 2, 3, 4, 5];
  let multiple = arr.map((s) => s * 2);
  console.log("multiply values", multiple);
  // Normal function
  let multiple1 = arr.map(function (s) {
    return s * 2;
  });

  // diff
  // the number of lines will be increased in normal function
  // we can dont want t0 use the return statement in the arrow function
  return <div>Oct20</div>;
}

export default Oct20;
