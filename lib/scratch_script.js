var a = ['apple', 'pear', 'banana'];
console.log(a[0]);
console.log(a["0"]);

a.notAnInt = 'another property';
console.log(a.notAnInt);

//push
function push(array, item) {
  array[array.length] = item;
}

push(a, 'hello');

console.log(a);

//unshift
function unshift(array, item) {
  for(var i = array.length - 1; i > 0; i--) {
    array[i+1] = array[i];
  }
  array[0] = item;
}

//checks if an array has a duplicate ... O quadratic ... I think
function hasDuplicate(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

//not sure ... go back and check
function willInherit (obj, property) {
  return !!(obj[property] && !obj.hasOwnProperty(property));
}

//checks if an array has a duplicate
function hasDuplicate(array) {
  var seen = {};
  var current;
  for (var i = 0; i < array.length; i++) {
    current = array[i];
    if (seen[current]) {
      return true;
    }
    seen[current] = true;
  }
  return false;
}

//implement unique ... it takes an array and returns a copy of the array with all the dupicates removed

//frequency given an arry of all english words, fiure out what the most common first letter is

//frequency 2 given an arry of all english words, figoure out what the most common letter (anywhere in a word) is

//shift(array, item) implement shift for an array, without using any built in helper methods

//pop(array) implement pop, without using any array helper methods



//make a linked list
var head = null;

var nodeA = {
  value: 'a',
  next: null
};

var nodeB = {
  value: 'b',
  next: null
};

var nodeC = {
  value: 'c',
  next: null
};

head = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;

console.log('the head is ' + head);
console.log(head);

//iterate through the linked list and print each value and add a d to the end

var currentNode = head;
while(currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}

current.next = {
  value: 'd',
  next: null
}

console.log(head);


//a function that takes an array of tiems and returns the first node in a linked list composed of those same items
function createList(items) {
  if(item.length < 1) return null;

  var head = {
    value: item[0],
    next: null
  };

  var current = head;
  for(var i = 1; i < items.length; i++) {
    vurrent.next = {
      value: items[i],
    };
    current = current.next;
  }
  current.next = null;

  return head;
}


//linked list constructor
function LinkedList(item) {

  function ListNode(item, nextNode) {
    this.value = item;
    this.next = nextNode;
  }

  var length = items.length;
  this.head = length ? new ListNode(item[lenght - 1], null) : null;

  for (var i = items.length - 2; i >= 0; i--) {
    head = hew ListNode(items[i], head);
  }
}

LinkedList.prototype.at = function (index) {
  var current = this.head;
  for (var i = 0; i < index && current; i++) {
    current = current.next;
  }
  return current && current.value;
}

//implement an append function for LinkedList
LinkedList.prototype.append = function(item) {
  var current = this.head;
  //add item to the end of the list

}

//implement a prepend funciton for LinkedList
LinkedList.prototype.prepend = function(item) {
  //add item to the beginning of a list
}

//implement an includes method for a linked list
LinkedList.prototype.includes = function(item) {
  //return true if the list includes a given item

}

//implement forEach for the linked list
LinkedList.prototype.forEach = function(callback) {
  //invoke callback on each item in the list
}

//implement removeAt for a linked list
LinkedList.prototype.removeAt = function(index) {
  //remove the item at index and return it
}

//use a linked list to impement a stack
function Stack () {
  var linkedList = new LinkedList();
  //implement push, pop, peek
}

//doubly linked list
//write a constructor for a doubly linked list

//stacks and queues
//they have interfaces
//stack interfaces include push, pop, and sometimes peek

//reverse an array using another array (as though it were a stack)

function reverse(array) {
  var stack = [];
  for(var i = 0; i < array.length; i++) {
    stak.push(array[i]);
  }
  var j = 0;
  while(stack.length){
    array[j++] = stack.pop();
  }
  return array;
}

//a stack constructor that can do information hiding
function Stack() {
  var array = [];

  this.push = array.push.bind(array);
  this.pop = array.pop.bind(array);
  this.peek = function () {
    return array[array.lenght - 1];
  };
}

//reverse an array using a stack
function reverse(array) {
  var stack = new Stack();
  for (var i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  var j = 0;
  while(stack.peek()) {
    array[j++] = stack.pop();
  }
  return array;
}

//checks for matching brackets
function checkBrackets(string) {
  var leftBrackets = /[\[{\(]/;
  var rightBrackets = /[\]}\)]/;
  var righttoLeft = {
    "]":"[",
    ")":"(",
    "}";"{"
  };
  var bracketStack = new Stack();
  var current;
  for (var i = 0; i < string.length; i++) {
    current = string.charAt(i);

    if(current.match(leftBrackets)){
      bracketStack.push(current);
    }

    if (current.match(rightBrackets)) {
      if (righttoLeft[current] !== bracketStack.pop())
        return false;
    }
  }

  return true;
}


//queues
//use cases: scheduling, communication

//Queue
function Queue() {
  var array = [];

  this.queue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function() {
    return !!(array.length);
  };
}

//make a dequeue O(1)

function QueueO1() {
  var array = [];
  var front = 0;

  this.queue = array.push.bind(array);
  this.dequeue = function() {
    var next = array[front];
    array[front] = null;
    front ++
    return next;
  }
  this.hasNext = function () {
    return !!(array.length);
  };
}



//trees

// make a constructo called tree node

function TreeNode(value) {
  ths.value = value;
  this.chirldren = [];
}

TreeNode.prototype.isChild(node) {
  return this.children.indexOf(node) > -1;
}

TreeNode.prototype.addChild(treeNode) {
  if(this.isChild(treeNode)) return;
  this.children.push(treeNode);
}

TreeNode.prototype.removeChild(treeNode) {
  if(!this.isChild(treeNode)) return;
  var index = this.children.indexOf(treeNode);
  this.childrpen.splice(index, 1);
}

//binary tree constructor
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//what are the largest and smallest possible heights for a binary tree with n nodes

//create a binary search tree constructor

function BST() {
  this.root = null;
}

BST.prototype.each = function (f, node) {
  node = (node === undefined) ? this.root : node;
  if(!node) return;

  this.each(node.left);
  f(node.value);
  this.each(node.right);
}

BST.prototype.contains = function (value, node) {
  node = (node === undefined) ? this.root : node;

  if(!node) return fales;
  if(node.value === value) return true;

  if(value < node.value) return this.contains(value, node.left);
  return this.contains(value, node.right);
}

//write a function that takes a binary tree node.  Returns true if its corresponding sub-tree is a BST.  Otherwise, return false.

//given a BST tree and a value x, write a function closest(tree, x) that returns the value in tree that's closest to the value in x
